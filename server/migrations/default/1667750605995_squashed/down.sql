
DROP TABLE "public"."interior_colors";

DROP TABLE "public"."exterior_colors";

DROP TABLE "public"."engines";

DROP TABLE "public"."cam_types";

DROP TABLE "public"."transmission_types";

DROP TABLE "public"."cylinder_types";

alter table "public"."bodies" rename column "body_type_id" to "type_id";

alter table "public"."body_types" rename to "types";

DROP TABLE "public"."drive_types";

DROP TABLE "public"."fuel_types";

DROP TABLE "public"."engine_types";

DROP TABLE "public"."bodies";

DROP TABLE "public"."types";

DROP TABLE "public"."trims";

alter table "public"."models" rename to "model";

alter table "public"."makes" rename to "make";

DROP TABLE "public"."model";

DROP TABLE "public"."make";
