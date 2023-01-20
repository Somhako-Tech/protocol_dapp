import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateReferralArgs } from "./args/AggregateReferralArgs";
import { Referral } from "../../../models/Referral";
import { AggregateReferral } from "../../outputs/AggregateReferral";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Referral)
export class AggregateReferralResolver {
  @TypeGraphQL.Query(_returns => AggregateReferral, {
    nullable: false
  })
  async aggregateReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReferralArgs): Promise<AggregateReferral> {
    return getPrismaFromContext(ctx).referral.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
