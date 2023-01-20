import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMintArgs } from "./args/AggregateMintArgs";
import { Mint } from "../../../models/Mint";
import { AggregateMint } from "../../outputs/AggregateMint";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Mint)
export class AggregateMintResolver {
  @TypeGraphQL.Query(_returns => AggregateMint, {
    nullable: false
  })
  async aggregateMint(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMintArgs): Promise<AggregateMint> {
    return getPrismaFromContext(ctx).mint.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
