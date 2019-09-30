<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 255);
            $table->string('name_unicode', 265)->unique();
            $table->mediumText('description')->nullable();
            $table->text('images')->nullable();
            $table->integer('price')->nullable();
            $table->integer('promotion_price')->nullable();
            $table->integer('time_begin')->nullable();
            $table->integer('time_end')->nullable();
            $table->mediumText('description')->nullable();
            $table->smallInteger('status')->default(0);
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('products');
    }
}
