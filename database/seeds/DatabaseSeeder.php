<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserTableSeeder::class);
        $fake = Faker::create();
        $limit = 5;
        $status = array("active", "inactive");
        $roles = array("Startup", "R&D", "Incubators", "Coworking Space", "Funding Agencies", "Development Organization");
        $sectors = array("Agriculture", "Finance", "Mining", "Education", "Fishing", "Utility", "Health","Sanitation");
        for ($i=0; $i < $limit; $i++) {

          DB::table('ecosystem_parents')->insert([
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s'),
          ]);

          DB::table('ecosystems')->insert([
            'name' => $fake->company,
            'ecosystem_parent_id' => $i,
            'edition' => $i,
          ]);

          DB::table('organizations')->insert([
            'ecosystem_parent_id' => $i,
            'name' => $fake->company,
            'description' => $fake->word,
            'date_founded' => $fake->date('Y-m-d H:i:s'),
            'date_registered' => $fake->date('Y-m-d H:i:s'),
            'tin_number' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
          DB::table('locations')->insert([
            'long' => $fake->longitude,
            'lat' => $fake->latitude,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);

          DB::table('sectors')->insert([
            'name' => $sectors[random_int(0, 8)],
            'description' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);

          DB::table('roles')->insert([
            'name' => $roles[random_int(0,6)],
            'description' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
          DB::table('organization_ecosystems')->insert([
            'ecosystem_id' => $id,
            'organization_id' => $id,
            'status' => $status[random_int(0,1)],
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
          DB::table('organization_roles')->insert([
            'role_id' => $id,
            'organization_id' => $id,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
          DB::table('organization_sectors')->insert([
            'sector_id' => $id,
            'organization_id' => $id,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
          DB::table('organization_locations')->insert([
            'organization_id' => $id,
            'location_id' => $id,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
        }
    }
}
