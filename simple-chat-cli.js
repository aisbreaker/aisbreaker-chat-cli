#!/usr/bin/env node

import { OpenAIAPI } from "aisbreaker-api";

async function action() {
    console.log("simple-chat-cli");
    console.log("---------------");

    // initialization
    const api = new OpenAIAPI();

    // 1 question
    const question = process.argv[2];
    console.log(`Question: ${question}`);
    if (!question) {
        console.log("No question provided - Exit now.");
        return;
    }

    // 1 answer
    const answer = await api.sendMessage(question);
    console.log(`Answer: ${answer.responseText}`);
}

action();
