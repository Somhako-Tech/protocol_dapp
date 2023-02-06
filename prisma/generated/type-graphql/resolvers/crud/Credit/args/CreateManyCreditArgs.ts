import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditCreateManyInput } from "../../../inputs/CreditCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCreditArgs {
  @TypeGraphQL.Field(_type => [CreditCreateManyInput], {
    nullable: false
  })
  data!: CreditCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
