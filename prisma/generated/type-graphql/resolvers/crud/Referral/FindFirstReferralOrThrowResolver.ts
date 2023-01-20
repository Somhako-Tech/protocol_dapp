import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstReferralOrThrowArgs } from "./args/FindFirstReferralOrThrowArgs";
import { Referral } from "../../../models/Referral";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Referral)
export class FindFirstReferralOrThrowResolver {
  @TypeGraphQL.Query(_returns => Referral, {
    nullable: true
  })
  async findFirstReferralOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstReferralOrThrowArgs): Promise<Referral | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).referral.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
