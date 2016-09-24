<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizationSectorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organization_sectors', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('organization_id')->unsigned()->nullable()->default(null);
            $table->foreign('organization_id')->references('id')->on('organizations')->onDelete('cascade');
            $table->integer('sector_id')->unsigned()->nullable()->default(null);
            $table->foreign('sector_id')->references('id')->on('sectors')->onDelete('cascade');
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
        Schema::drop('organization_sectors');
    }
}
