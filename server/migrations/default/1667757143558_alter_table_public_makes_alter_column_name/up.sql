alter table "public"."makes"
add
    constraint "makes_name_key" unique ("name");

CREATE TABLE
    "cars" (
        "Make" text,
        "make_id" integer,
        "Year" text,
        "Model" text,
        "model_id" integer,
        "Category" text,
        "body_type" integer,
    );