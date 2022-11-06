CREATE TABLE
    "public"."makes" (
        "id" serial NOT NULL,
        "name" text NOT NULL,
        PRIMARY KEY ("id"),
        UNIQUE ("id") UNIQUE ("name")
    );

CREATE TABLE
    "public"."models" (
        "id" serial NOT NULL,
        "make_id" integer,
        "name" text NOT NULL,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("make_id") REFERENCES "public"."makes"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            UNIQUE ("id")
    );

CREATE TABLE
    "public"."trims" (
        "id" serial NOT NULL,
        "model_id" integer,
        "year" integer NOT NULL,
        "name" text NOT NULL,
        "description" text NOT NULL,
        "msrp" integer NOT NULL,
        "invoice" integer NOT NULL,
        "hash" uuid NOT NULL DEFAULT gen_random_uuid(),
        PRIMARY KEY ("hash", "id"),
        FOREIGN KEY ("model_id") REFERENCES "public"."models"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            UNIQUE ("id")
    );

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE
    "public"."body_types" (
        "id" serial NOT NULL,
        "name" text NOT NULL,
        PRIMARY KEY ("id"),
        UNIQUE ("id")
    );

CREATE TABLE
    "public"."bodies" (
        "id" serial NOT NULL,
        "trim_id" integer,
        "body_type_id" integer,
        "length" Numeric(3, 2),
        "width" Numeric(3, 2),
        "height" Numeric(3, 2),
        "doors" smallint,
        "seats" int2,
        "wheel_base" Numeric(3, 2),
        "front_track" Numeric(3, 2),
        "rear_track" Numeric(3, 2),
        "ground_clearance" Numeric(3, 2),
        "cargo_capacity" Numeric(3, 2),
        "max_cargo_capacity" Numeric(3, 2),
        "curb_weight" int2,
        "gross_weight" int2,
        "max_payload" int2,
        "max_towing_capacity" int2,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("trim_id") REFERENCES "public"."trims"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            FOREIGN KEY ("body_type_id") REFERENCES "public"."body_types"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            UNIQUE ("id")
    );

CREATE TABLE
    "public"."engine_types" (
        "id" serial NOT NULL,
        "name" text NOT NULL,
        PRIMARY KEY ("id"),
        UNIQUE ("id") UNIQUE ("name")
    );

CREATE TABLE
    "public"."fuel_types" (
        "id" serial NOT NULL,
        "name" text NOT NULL,
        PRIMARY KEY ("id"),
        UNIQUE ("id") UNIQUE ("name")
    );

CREATE TABLE
    "public"."drive_types" (
        "id" serial NOT NULL,
        "name" text,
        PRIMARY KEY ("id"),
        UNIQUE ("id") UNIQUE ("name")
    );

CREATE TABLE
    "public"."cylinder_types" (
        "id" serial NOT NULL,
        "name" text NOT NULL,
        PRIMARY KEY ("id"),
        UNIQUE ("id"),
        UNIQUE ("name")
    );

CREATE TABLE
    "public"."transmission_types" (
        "id" serial NOT NULL,
        "name" text NOT NULL,
        PRIMARY KEY ("id"),
        UNIQUE ("id"),
        UNIQUE ("name")
    );

CREATE TABLE
    "public"."cam_types" (
        "id" serial NOT NULL,
        "name" text NOT NULL,
        PRIMARY KEY ("id"),
        UNIQUE ("id"),
        UNIQUE ("name")
    );

CREATE TABLE
    "public"."engines" (
        "id" serial NOT NULL,
        "trim_id" integer,
        "engine_type" integer,
        "fuel_type" integer,
        "cylinder_type" integer,
        "size" Numeric(3, 2),
        "horsepower_hp" int2,
        "horsepower_rpm" int2,
        "torque_ft_lbs" int2,
        "torque_rpm" integer,
        "valves" int2,
        "valve_timing" text,
        "cam_type" integer,
        "drive_type" integer,
        "transmission" integer,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("engine_type") REFERENCES "public"."engine_types"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            FOREIGN KEY ("trim_id") REFERENCES "public"."trims"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            FOREIGN KEY ("fuel_type") REFERENCES "public"."fuel_types"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            FOREIGN KEY ("cylinder_type") REFERENCES "public"."cylinder_types"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            FOREIGN KEY ("cam_type") REFERENCES "public"."cam_types"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            FOREIGN KEY ("drive_type") REFERENCES "public"."drive_types"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            FOREIGN KEY ("transmission") REFERENCES "public"."transmission_types"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            UNIQUE ("id")
    );

CREATE TABLE
    "public"."exterior_colors" (
        "id" serial NOT NULL,
        "trim_id" integer,
        "name" text NOT NULL,
        "rgb" text,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("trim_id") REFERENCES "public"."trims"("id") ON UPDATE
        set null ON DELETE
        set
            null,
            UNIQUE ("id")
    );

CREATE TABLE
    "public"."interior_colors" (
        "id" serial NOT NULL,
        "trim_id" integer,
        "name" text NOT NULL,
        "rgb" text NOT NULL,
        PRIMARY KEY ("id"),
        UNIQUE ("id"),
        UNIQUE ("name"),
        UNIQUE ("rgb")
    );