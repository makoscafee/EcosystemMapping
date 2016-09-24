<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizationRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organization_roles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('organization_id')->unsigned()->nullable()->default(null);
            $table->foreign('organization_id')->references('id')->on('organizations')->onDelete('cascade');
            $table->integer('role_id')->unsigned()->nullable()->default(null);
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('organization_roles');
    }
}
