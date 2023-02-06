import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditUpdateManyMutationInput } from "../../../inputs/CreditUpdateManyMutationInput";
import { CreditWhereInput } from "../../../inputs/CreditWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCreditArgs {
  @TypeGraphQL.Field(_type => CreditUpdateManyMutationInput, {
    nullable: false
  })
  data!: CreditUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CreditWhereInput, {
    nullable: true
  })
  where?: CreditWhereInput | undefined;
}
