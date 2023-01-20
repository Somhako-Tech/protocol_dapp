import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferralUpdateManyMutationInput } from "../../../inputs/ReferralUpdateManyMutationInput";
import { ReferralWhereInput } from "../../../inputs/ReferralWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReferralArgs {
  @TypeGraphQL.Field(_type => ReferralUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReferralUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReferralWhereInput, {
    nullable: true
  })
  where?: ReferralWhereInput | undefined;
}
