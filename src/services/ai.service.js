import { Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY = "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"
const OPENAI_API_KEY2 = "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"

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY2,
});

async function getAiTextCompletion(library) {
    

const openai = new OpenAIApi(configuration);
    try {
        const response = await openai
        .createCompletion("text-davinci-002", {
        prompt: `build a to do list for ${library} \n`,
        temperature: 1,
        max_tokens: 311,
        top_p: 0.3,
        frequency_penalty: 0.5,
        presence_penalty: 0,
    }) 
    
    var splittingPattern = /[A-Za-z ]+/g
    var filteredResponse = response.data.choices[0].text.match(splittingPattern)
    console.log(filteredResponse);
    return {checklistTitle:library,
        todoTitles:filteredResponse}

} catch (err) {
    console.log('could not get a response from GPT-3', err)
}

}


export const aiService = {
    getAiTextCompletion
}
