<?php

use App\Model\Role;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InitDatabase extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->smallIncrements('id');
            $table->string('name')->unique();
            $table->string('description', 255)->nullable();
        });

        //-----------

        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->smallInteger('role_id')->unsigned();
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
            $table->rememberToken();
            $table->timestamps();
        });

        //-----------
        $data_roles = [
            [
                'name' => 'Founder',
                'description' => 'Người viết hệ thống. nick name: \'nnk242\''
            ], [
                'name' => 'Admin'
            ]
        ];

        foreach ($data_roles as $data_role) {
            Role::create($data_role);
        }

        User::create(
            [
                'name' => 'Admin',
                'email' => 'admin@admin.com',
                'password' => bcrypt('admin123'),
                'role_id' => 1
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('roles');
    }
}
