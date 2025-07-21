"use client"

import { documentToHtmlString } from "@contentful/rich-text-types"

const client  = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export async function fetchInfo() {
    const entries = await client.getEntries({
        content_type: "portfolio"
    });
    if (entries.items){
        return{
            items: entries.items
        }
    }
}

export default client;