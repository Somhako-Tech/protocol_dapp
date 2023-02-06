import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCreditArgs } from "./args/AggregateCreditArgs";
import { Credit } from "../../../models/Credit";
import { AggregateCredit } from "../../outputs/AggregateCredit";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Credit)
export class AggregateCreditResolver {
  @TypeGraphQL.Query(_returns => AggregateCredit, {
    nullable: false
  })
  async aggregateCredit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCreditArgs): Promise<AggregateCredit> {
    return getPrismaFromContext(ctx).credit.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
