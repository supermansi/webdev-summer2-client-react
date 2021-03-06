import React from 'react'

let _singleton = Symbol();

//const LESSON_API_URL =  'https://webdev-server-java-mansijain.herokuapp.com/api/course/CID/module/MID/lesson';
//const LESSON_ID_URL = 'https://webdev-server-java-mansijain.herokuapp.com/api/lesson';
const LESSON_ID_URL = 'https://webdev-server-java-mansijain.herokuapp.com/api/lesson';
const LESSON_API_URL =  'https://webdev-server-java-mansijain.herokuapp.com/api/course/CID/module/MID/lesson';

export default class LessonService extends React.Component {
    constructor(singletonToken) {
        super();
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    findAllLessons() {
        return fetch(LESSON_ID_URL)
            .then(function(response){
                return response.json();
            });
    }

    findAllLessonsForModule(courseId, moduleId) {
        return fetch(
            LESSON_API_URL
                .replace('CID', courseId)
                .replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }

    findLessonById(lessonId) {
        return fetch(LESSON_ID_URL + '/' + lessonId)
            .then(function(response){
                return response.json();
            });
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(
            LESSON_API_URL
                .replace('CID', courseId)
                .replace('MID', moduleId),
            {
                "body": JSON.stringify(lesson),
                "method" : "POST",
                "headers" : {
                    "content-type" : "application/json"
                },
            })
            .then(function(response){
                return response.json();
            });
    }

    deleteLesson(lessonId) {
        return fetch(
            LESSON_ID_URL + '/' + lessonId,
            {
                "method" : "DELETE"
            }
        ).then(function(response){
            return response.json();
        });
    }
}