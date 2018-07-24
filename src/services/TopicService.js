let _singleton = Symbol();

const TOPIC_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';
const TOPIC_ID_URL = 'http://localhost:8080/api/topic';
export default class TopicService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }

    createTopic(courseId, moduleId, lessonId, topic) {
        return fetch(
            TOPIC_API_URL
                .replace('CID', courseId)
                .replace('MID', moduleId)
                .replace('LID', lessonId),
            {
                "body" : JSON.stringify(topic),
                "method" : "POST",
                "headers" : {
                    "content-type" : "application/json"
                }
            })
            .then(function(response){
                return response.json();
            })
    }

    deleteTopic(topidId){
        return fetch(
            TOPIC_ID_URL + '/' + topidId,
            {
                "method" : "DELETE"
            }
        ).then(function(response){
            return response.json();
        });
    }

    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        return fetch(
            TOPIC_API_URL
                .replace('CID', courseId)
                .replace('MID', moduleId)
                .replace('LID', lessonId)
        )
        .then(function (response) {
            return response.json();
        })
    }

    findTopicById(topicId) {
        return fetch(TOPIC_ID_URL.replace('TID', topicId))
            .then(function (response) {
                return response.json();
            });
    }

    findAllTopics() {
        return fetch(TOPIC_ID_URL)
            .then(function (response) {
                return response.json();
            });
    }


    updateTopic(topicId, topic) {
        return fetch(TOPIC_ID_URL
                .replace('TID', topicId), {
                    method: 'PUT',
                    body: JSON.stringify(topic),
                    headers: {
                        'content-type': 'application/json'
                    }
                }
        )
        .then(function (response) {
            return response.json();
        });
    }

}