<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
          $table->increments('id');
          $table->string('email')->nullable();
          $table->double('phone_number')->nullable();
          $table->string('website')->nullable();
          $table->string('facebook')->nullable();
          $table->string('twitter')->nullable();
          $table->string('instagram')->nullable();
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
        Schema::drop('contacts');
    }
}
