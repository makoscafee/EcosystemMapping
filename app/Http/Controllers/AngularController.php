<?php

namespace App\Http\Controllers;

class AngularController extends AppBaseController
{
    public function serveApp()
    {
        return view('index');
    }

    public function unsupported()
    {
        return view('unsupported_browser');
    }
}
