import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditUpdateInput } from "../../../inputs/CreditUpdateInput";
import { CreditWhereUniqueInput } from "../../../inputs/CreditWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCreditArgs {
  @TypeGraphQL.Field(_type => CreditUpdateInput, {
    nullable: false
  })
  data!: CreditUpdateInput;

  @TypeGraphQL.Field(_type => CreditWhereUniqueInput, {
    nullable: false
  })
  where!: CreditWhereUniqueInput;
}
