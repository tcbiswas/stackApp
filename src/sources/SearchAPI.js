import {
    get
} from 'http'


function getSearchURL() {
    return 'https://api.stackexchange.com/2.2/search'
}

function getQuestionIdsURL() {
    return 'https://api.stackexchange.com/2.2/questions/'
}

function getSearchList(searchQuery, callback) {
    const searchURL = getSearchURL() + '?order=desc&sort=activity&intitle=' + searchQuery + '&site=stackoverflow'
    get(searchURL, function(res) {
        console.log("Got response: " + res);
        let rawData = '';
        res.on('data', (chunk) => {
            rawData += chunk;
        });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                var resultArray = [];
                console.log(parsedData.items);
                parsedData.items.map((result, i) => {
                    resultArray.push({
                        "score": result.score,
                        "question": result.title,
                        "viewcount": result.view_count,
                        "tags": result.tags.toString(),
                        "asked": result.creation_date,
                        "id": result.question_id
                    })
                })
                callback(resultArray);
            } catch (e) {

            }
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
}




function getAnswersById(questionId, callback) {
    const answerURL = getQuestionIdsURL() + questionId + '/answers?order=desc&sort=activity&site=stackoverflow'
    get(answerURL, function(res) {
        console.log("Got response: " + res);
        let rawData = '';
        res.on('data', (chunk) => {
            rawData += chunk;
        });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                var resultArray = [];
                console.log(parsedData.items);
                parsedData.items.map((result, i) => {
                    resultArray.push({
                        "score": result.score,
                        "accepted": result.is_accepted,
                        "answerid": result.answer_id
                    })
                })
                callback(resultArray);
            } catch (e) {

            }
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
}

export default {
    getSearchList,
    getAnswersById
}