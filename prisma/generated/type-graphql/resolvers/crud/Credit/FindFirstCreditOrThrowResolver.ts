import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCreditOrThrowArgs } from "./args/FindFirstCreditOrThrowArgs";
import { Credit } from "../../../models/Credit";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Credit)
export class FindFirstCreditOrThrowResolver {
  @TypeGraphQL.Query(_returns => Credit, {
    nullable: true
  })
  async findFirstCreditOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCreditOrThrowArgs): Promise<Credit | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).credit.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
