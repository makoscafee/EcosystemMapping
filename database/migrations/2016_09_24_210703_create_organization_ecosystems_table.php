<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizationEcosystemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organization_ecosystems', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ecosystem_id')->unsigned()->nullable()->default(null);
            $table->foreign('ecosystem_id')->references('id')->on('ecosystems')->onDelete('cascade');
            $table->integer('organization_id')->unsigned()->nullable()->default(null);
            $table->foreign('organization_id')->references('id')->on('organizations')->onDelete('cascade');
            $table->enum('status', array('active', 'inactive'))->nullable();
            $table->softDeletes();
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
        Schema::drop('organization_ecosystems');
    }
}
