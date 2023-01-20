import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMintsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutMintsNestedInput";

@TypeGraphQL.InputType("MintUpdateWithoutProfileInput", {
  isAbstract: true
})
export class MintUpdateWithoutProfileInput {
  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  approved?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMintsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutMintsNestedInput | undefined;
}
