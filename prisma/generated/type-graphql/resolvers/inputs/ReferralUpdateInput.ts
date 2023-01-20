import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReferralsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutReferralsNestedInput";

@TypeGraphQL.InputType("ReferralUpdateInput", {
  isAbstract: true
})
export class ReferralUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReferralsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutReferralsNestedInput | undefined;
}
