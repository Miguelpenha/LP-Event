import { Variables, RequestDocument, GraphQLClient } from 'graphql-request'

interface IParams {
    variables?: Variables
    query: RequestDocument
}

function requestCMS({ query, variables } : IParams) {
    const headers = {
        authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`
    }

    const client = new GraphQLClient(process.env.DATOCMS_URL, { headers })
    
    return client.request(query, variables)
}

export default requestCMS