<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEcosystemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ecosystems', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('edition')->nullable();
            $table->integer('ecosystem_parent_id')->unsigned()->nullable()->default(null);
            $table->foreign('ecosystem_parent_id')->references('id')->on('ecosystem_parents')->onDelete('cascade');
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
        Schema::drop('ecosystems');
    }
}
