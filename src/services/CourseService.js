//const COURSE_API_URL = 'https://webdev-server-java-mansijain.herokuapp.com/api/course';
const COURSE_API_URL = 'http://localhost:8080/api/course';
let _singleton = Symbol();

export default class CourseService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

    componentDidMount() {
        this.findAllCourses();
    }

    findCourseById(courseId) {
        return fetch(COURSE_API_URL + "/" + courseId)
            .then(function(response){
                return response.json();
            });
    }

    findAllCourses(){
        return fetch(COURSE_API_URL)
            .then((response)=>(
                response.json()
            ));
    }

    createCourse(course) {
        return (
            fetch(COURSE_API_URL, {
                body : JSON.stringify(course),
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                }
            })
                .then(function(response) {
                    return response.json();
                })
        );
    }

    deleteCourse(courseId) {
        //console.log("delete?" + courseId);
        return fetch(COURSE_API_URL + '/' + courseId, {
            method : 'DELETE'
        }).then(function(response){
            return  response;
        })
    }

    updateCourse(course){
        return fetch(COURSE_API_URL,{
            body:JSON.stringify(course),
            method:'put',
            header:{
                'content-type':'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }
}