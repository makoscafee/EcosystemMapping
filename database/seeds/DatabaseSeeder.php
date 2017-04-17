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
use App\Ecosystem\Models\Project;
use App\Ecosystem\Models\ProjectRole;
use App\Ecosystem\Models\Event;
use App\Ecosystem\Models\EventRole;

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
        //$this->call(LocationSeeder::class);
        //this will be fed manually
        //$this->call(OrganizationSeeder::class);
        //$this->call(ProjectSeeder::class);
        //$this->call(EventSeeder::class);
        //$this->call(ProjectRoleSeeder::class);
        //$this->call(EventRoleSeeder::class);
        //$this->call(DependencySeeder::class);

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
        $fake = Faker::create();
          DB::table('ecosystem_parents')->insert([
            'name' => 'Technology Ecosystem',
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s'),
          ]);
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
        $ecosystem_parents = EcosystemParent::lists('id')->All();
          DB::table('ecosystems')->insert([
            'name' => 'Innovation Ecoystem',
            'ecosystem_parent_id' => $fake->randomElement($ecosystem_parents),
            'edition' => '1',
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s'),
          ]);
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
        $limit = 200;

        for ($i=0; $i < $limit; $i++) {

          DB::table('locations')->insert([
            'long' => $fake->longitude(29.673386,39.276638),
            'lat' => $fake->latitude(-6.9, -3.386925),
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
        $limit = 200;
        $status = array("active", "inactive");
        $roles = array("Startup", "R&D", "Incubators", "Coworking Space", "Funding Agencies", "Development Organization");
        $sectors = array("Agriculture", "Finance", "Mining", "Education", "Fishing", "Utility", "Health", "Sanitation", 'Other');
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
            'name' => $roles[$i],
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
        $sectors = array("Agriculture", "Finance", "Mining", "Education", "Fishing", "Utility", "Health","Sanitation", 'Others');

        for ($i=0; $i < sizeOf($sectors); $i++) {

          DB::table('sectors')->insert([
            'name' => $sectors[$i],
            'description' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
        }
    }
}

class ProjectSeeder extends Seeder
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
        $limit = 200;
        for ($i=0; $i < $limit; $i++) {

          DB::table('projects')->insert([
            'name' => $fake->word,
            'description' => $fake->text,
            'start_date' => $fake->date('Y-m-d H:i:s'),
            'end_date'   => $fake->date('Y-m-d H:i:s'),
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
        }
    }
}

class EventSeeder extends Seeder
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
        $limit = 200;
        for ($i=0; $i < $limit; $i++) {

          DB::table('events')->insert([
            'name' => $fake->word,
            'description' => $fake->text,
            'start_date' => $fake->date('Y-m-d H:i:s'),
            'end_date'   => $fake->date('Y-m-d H:i:s'),
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
        }
    }
}

class EventRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserTableSeeder::class);
        $limit = 200;
        $fake = Faker::create();
        for ($i=0; $i < $limit; $i++) {

          DB::table('event_roles')->insert([
            'name' => $fake->word,
            'description' => $fake->text,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
        }
    }
}

class ProjectRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserTableSeeder::class);
        $limit = 200;
        $fake = Faker::create();
        for ($i=0; $i < $limit; $i++) {

          DB::table('project_roles')->insert([
            'name' => $fake->word,
            'description' => $fake->text,
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
        $limit = 300;
        $status = array("active", "inactive");
        $ecosystem_parents = EcosystemParent::lists('id')->All();
        $organizations = Organization::lists('id')->All();
        $sectors = Sector::lists('id')->All();
        $locations = Location::lists('id')->All();
        $roles = Role::lists('id')->All();
        $ecosystems = Ecosystem::lists('id')->all();
        $projects = Project::lists('id')->all();
        $events = Event::lists('id')->all();
        $event_roles = EventRole::lists('id')->all();
        $project_roles = ProjectRole::lists('id')->all();
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
          DB::table('event_infos')->insert([
            'event_id' => $fake->randomElement($events),
            'organization_id' => $fake->randomElement($organizations),
            'event_role_id' => $fake->randomElement($event_roles),
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
          ]);
          DB::table('project_infos')->insert([
            'project_id' => $fake->randomElement($projects),
            'organization_id' => $fake->randomElement($organizations),
            'project_role_id' => $fake->randomElement($project_roles),
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
