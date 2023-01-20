import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferralWhereInput } from "../../../inputs/ReferralWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReferralArgs {
  @TypeGraphQL.Field(_type => ReferralWhereInput, {
    nullable: true
  })
  where?: ReferralWhereInput | undefined;
}
