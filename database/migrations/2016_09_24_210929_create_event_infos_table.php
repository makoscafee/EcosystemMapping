<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_infos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('event_id')->unsigned()->nullable()->default(null);
            $table->foreign('event_id')->references('id')->on('events')->onDelete('cascade');
            $table->integer('organization_id')->unsigned()->nullable()->default(null);
            $table->foreign('organization_id')->references('id')->on('organizations')->onDelete('cascade');
            $table->integer('event_role_id')->unsigned()->nullable()->default(null);
            $table->foreign('event_role_id')->references('id')->on('event_roles')->onDelete('cascade');
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
        Schema::drop('event_infos');
    }
}
