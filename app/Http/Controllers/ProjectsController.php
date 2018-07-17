<?php
namespace app\Http\Controllers;
use app\Project;
class ProjectsController 
{
    /**
     * Show the page to create a new project.
     */
    public function create()
    {
        return view('projects.create', [
            'projects' => Project::all() 
        ]);
    }
    /**
     * Store a new project in the database.
     */
    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            "description" => 'required'
        ]); 
        Project::forceCreate([
            'name' => request('name'),
            'description' => request('description')
        ]); 
        return ['message' => 'Project Created!'];
    }
}