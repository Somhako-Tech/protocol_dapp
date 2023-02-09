import "reflect-metadata";
import { resolvers } from "../../prisma/generated/type-graphql";
import { buildSchema } from "type-graphql";
import { createYoga } from "graphql-yoga";
import { context } from "../../prisma/context";

import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
    api: {
        // Disable body parsing (required for file uploads)
        bodyParser: false,
    },
};

const schema = buildSchema({
    resolvers: resolvers,
    validate: false,
});

//TODO Auth
export default createYoga<{
    req: NextApiRequest;
    res: NextApiResponse;
}>({
    schema,
    context: context,
    // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
    graphqlEndpoint: "/api/graphql",
});
