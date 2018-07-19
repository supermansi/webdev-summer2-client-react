import React from 'react'

let _singleton = Symbol();
const MODULE_API_URL = 'http://localhost:8080/api/course/CID/module';
const MODULE_ID_URL = 'http://localhost:8080/api/module/MODULE_ID';

export default class ModuleService extends React.Component {
    constructor(singletonToken) {
        super();
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {   body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    deleteModule(moduleId) {
        return fetch(
            MODULE_ID_URL
                .replace('MODULE_ID', moduleId),
            {
                "method" : "DELETE"
            });
    }

    findModuleById(moduleId) {
        return fetch(MODULE_ID_URL + '/' + moduleId)
            .then(function(response){
                return response.json();
            });
    }

    findAllModulesForCourse(courseId) {
        return  fetch(MODULE_API_URL.replace('COURSE_ID', courseId))
            .then(function(response){
                return response.json();
            })
    }

}