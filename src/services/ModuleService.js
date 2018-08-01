let _singleton = Symbol();
const MODULE_API_URL = 'https://webdev-server-java-mansijain.herokuapp.com/api/course/CID/module';
const MODULE_ID_URL = 'https://webdev-server-java-mansijain.herokuapp.com/api/module/MODULE_ID';

export default class ModuleService {
    constructor(singletonToken) {
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
        return  fetch(MODULE_API_URL
            .replace('CID', courseId))
            .then(function(response){
                return response.json();
            })
    }

    findAllModules() {
        return fetch(MODULE_API_URL)
            .then(function(response){
                return response.json();
            })
    }

}