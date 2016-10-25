<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Faker\Factory as Faker;
use App\Ecosystem\Models\EcosystemParent;
use App\Ecosystem\Models\Ecosystem;
use App\Ecosystem\Models\Sector;
use App\Ecosystem\Models\Location;
use App\Ecosystem\Models\Role;
use App\Ecosystem\Models\Organization;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(EcosystemParentSeeder::class);
        $this->call(EcosystemSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(SectorSeeder::class);
        $this->call(LocationSeeder::class);
        $this->call(OrganizationSeeder::class);
        $this->call(DependencySeeder::class);

    }
}



class EcosystemParentSeeder extends Seeder
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
        $limit = 20;

        for ($i=0; $i < $limit; $i++) {
          DB::table('ecosystem_parents')->insert([
            'name' => $fake->company,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s'),
          ]);
        }
    }
}


class EcosystemSeeder extends Seeder
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
        $limit = 20;
        $status = array("active", "inactive");
        $roles = array("Startup", "R&D", "Incubators", "Coworking Space", "Funding Agencies", "Development Organization");
        $sectors = array("Agriculture", "Finance", "Mining", "Education", "Fishing", "Utility", "Health","Sanitation");
        $ecosystem_parents = EcosystemParent::lists('id')->All();
        for ($i=0; $i < $limit; $i++) {
          DB::table('ecosystems')->insert([
            'name' => $fake->company,
            'ecosystem_parent_id' => $fake->randomElement($ecosystem_parents),
            'edition' => $i,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s'),
          ]);
        }
    }
}


class LocationSeeder extends Seeder
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
        $limit = 20;
        $status = array("active", "inactive");
        $roles = array("Startup", "R&D", "Incubators", "Coworking Space", "Funding Agencies", "Development Organization");
        $sectors = array("Agriculture", "Finance", "Mining", "Education", "Fishing", "Utility", "Health","Sanitation");

        for ($i=0; $i < $limit; $i++) {

          DB::table('locations')->insert([
            'long' => $fake->longitude,
            'lat' => $fake->latitude,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
        }
    }
}


class OrganizationSeeder extends Seeder
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
        $limit = 20;
        $status = array("active", "inactive");
        $roles = array("Startup", "R&D", "Incubators", "Coworking Space", "Funding Agencies", "Development Organization");
        $sectors = array("Agriculture", "Finance", "Mining", "Education", "Fishing", "Utility", "Health","Sanitation");
        $ecosystem_parents = EcosystemParent::lists('id')->All();
        for ($i=0; $i < $limit; $i++) {

          DB::table('organizations')->insert([
            'ecosystem_parent_id' => $fake->randomElement($ecosystem_parents),
            'name' => $fake->company,
            'description' => $fake->word,
            'date_founded' => $fake->date('Y-m-d H:i:s'),
            'date_registered' => $fake->date('Y-m-d H:i:s'),
            'tin_number' => $fake->isbn13,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);

        }
    }
}


class RoleSeeder extends Seeder
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
        $status = array("active", "inactive");
        $roles = array("Startup", "R&D", "Incubators", "Coworking Space", "Funding Agencies", "Development Organization");
        $sectors = array("Agriculture", "Finance", "Mining", "Education", "Fishing", "Utility", "Health","Sanitation");

        for ($i=0; $i < sizeOf($roles); $i++) {

          DB::table('roles')->insert([
            'name' => $roles[$fake->numberBetween(0, 5)],
            'description' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);

        }
    }
}


class SectorSeeder extends Seeder
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
        $status = array("active", "inactive");
        $roles = array("Startup", "R&D", "Incubators", "Coworking Space", "Funding Agencies", "Development Organization");
        $sectors = array("Agriculture", "Finance", "Mining", "Education", "Fishing", "Utility", "Health","Sanitation");

        for ($i=0; $i < sizeOf($sectors); $i++) {

          DB::table('sectors')->insert([
            'name' => $sectors[$fake->numberBetween(0, 7)],
            'description' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
        }
    }
}

class DependencySeeder extends Seeder
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
        $limit = 20;
        $status = array("active", "inactive");
        $roles = array("Startup", "R&D", "Incubators", "Coworking Space", "Funding Agencies", "Development Organization");
        $sectors = array("Agriculture", "Finance", "Mining", "Education", "Fishing", "Utility", "Health","Sanitation");
        $ecosystem_parents = EcosystemParent::lists('id')->All();
        $organizations = Organization::lists('id')->All();
        $sectors = Sector::lists('id')->All();
        $locations = Location::lists('id')->All();
        $roles = Role::lists('id')->All();
        $ecosystems = Ecosystem::lists('id')->all();
        for ($i=0; $i < $limit; $i++) {
          DB::table('organization_ecosystems')->insert([
            'ecosystem_id' => $fake->randomElement($ecosystems),
            'organization_id' => $fake->randomElement($organizations),
            'status' => $status[$fake->numberBetween(0,1)],
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
          DB::table('organization_roles')->insert([
            'role_id' => $fake->randomElement($roles),
            'organization_id' => $fake->randomElement($organizations),
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
          DB::table('organization_sectors')->insert([
            'sector_id' => $fake->randomElement($sectors),
            'organization_id' => $fake->randomElement($organizations),
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
          DB::table('organization_locations')->insert([
            'organization_id' => $fake->randomElement($organizations),
            'location_id' => $fake->randomElement($locations),
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
        }
    }
}
