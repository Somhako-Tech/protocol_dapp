import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVerificationTokenOrThrowArgs } from "./args/FindUniqueVerificationTokenOrThrowArgs";
import { VerificationToken } from "../../../models/VerificationToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationToken)
export class FindUniqueVerificationTokenOrThrowResolver {
  @TypeGraphQL.Query(_returns => VerificationToken, {
    nullable: true
  })
  async getVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVerificationTokenOrThrowArgs): Promise<VerificationToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationToken.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
