/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Exception {
  /** @example "ExceptionName" */
  exception?: string;
  /** @example 500 */
  code?: number;
  /** @example "/url/path" */
  url?: string;
  /** @example "Internal Error" */
  message?: string;
}

export interface Make {
  /**
   * @format int64
   * @minLength 1
   */
  id?: number;
  /**
   * @minLength 1
   * @maxLength 32
   */
  name?: string;
}

export interface MakeModel {
  /**
   * @format int64
   * @minLength 1
   */
  id?: number;
  /**
   * @format int64
   * @minLength 1
   */
  make_id?: number;
  /**
   * @minLength 1
   * @maxLength 64
   */
  name?: string;
}

export interface MakeModelTrim {
  /**
   * @format int64
   * @minLength 1
   */
  id?: number;
  /**
   * @format int64
   * @minLength 1
   */
  make_model_id?: number;
  /**
   * @format int32
   * @minLength 1
   * @maxLength 4
   */
  year?: number;
  /**
   * @minLength 1
   * @maxLength 128
   */
  name?: string;
  /**
   * @minLength 1
   * @maxLength 256
   */
  description?: string;
  /**
   * @format int64
   * @minLength 1
   */
  msrp?: number;
  /**
   * @format int64
   * @minLength 1
   */
  invoice?: number;
  /**
   * @minLength 64
   * @maxLength 64
   */
  hash?: string;
}

export interface MakeModelTrimBody {
  /**
   * @format int64
   * @minLength 1
   */
  id?: number;
  /**
   * @format int64
   * @minLength 1
   */
  make_model_trim_id?: number;
  /**
   * @minLength 1
   * @maxLength 32
   */
  type?:
    | 'Cargo Van'
    | 'Convertible'
    | 'Coupe'
    | 'Ext Van'
    | 'Hatchback'
    | 'Minivan'
    | 'Passenger Van'
    | 'Sedan'
    | 'SUV'
    | 'Truck (Access Cab)'
    | 'Truck (Cab Plus)'
    | 'Truck (Club Cab)'
    | 'Truck (Crew Cab)'
    | 'Truck (CrewMax)'
    | 'Truck (Double Cab)'
    | 'Truck (Extended Cab)'
    | 'Truck (King Cab)'
    | 'Truck (Mega Cab)'
    | 'Truck (Quad Cab)'
    | 'Truck (Regular Cab)'
    | 'Truck (SuperCab)'
    | 'Truck (SuperCrew)'
    | 'Truck (Xtracab)'
    | 'Van'
    | 'Wagon';
  /** @format int32 */
  doors?: number;
  /** @format float */
  length?: number;
  /** @format float */
  width?: number;
  /** @format int32 */
  seats?: number;
  /** @format float */
  height?: number;
  /** @format float */
  wheel_base?: number;
  /** @format float */
  front_track?: number;
  /** @format float */
  rear_track?: number;
  /** @format float */
  ground_clearance?: number;
  /** @format float */
  cargo_capacity?: number;
  /** @format float */
  max_cargo_capacity?: number;
  /** @format int64 */
  curb_weight?: number;
  /** @format int64 */
  gross_weight?: number;
  /** @format int64 */
  max_payload?: number;
  /** @format int64 */
  max_towing_capacity?: number;
}

/** Engine specifications and transmission type */
export interface MakeModelTrimEngine {
  /**
   * @format int64
   * @minLength 1
   */
  id?: number;
  /**
   * @format int64
   * @minLength 1
   */
  make_model_trim_id?: number;
  /** @maxLength 32 */
  engine_type?:
    | 'diesel'
    | 'electric'
    | 'electric (fuel cell)'
    | 'flex-fuel (FFV)'
    | 'gas'
    | 'hybrid'
    | 'mild hybrid'
    | 'natural gas (CNG)'
    | 'plug-in hybrid';
  /** @maxLength 64 */
  fuel_type?:
    | 'diesel fuel'
    | 'electric'
    | 'flex-fuel (premium unleaded recommended/E85)'
    | 'flex-fuel (premium unleaded required/E85)'
    | 'flex-fuel (unleaded/E85)'
    | 'flex-fuel (unleaded/natural gas)'
    | 'hydrogen'
    | 'natural gas'
    | 'premium unleaded (recommended)'
    | 'premium unleaded (required)'
    | 'regular unleaded';
  /**
   * @format string
   * @maxLength 8
   */
  cylinders?: 'fla' | 'I2' | 'I3' | 'I4' | 'I5' | 'I6' | 'rot' | 'V10' | 'V12' | 'V6' | 'V8' | 'W12' | 'W16' | 'W8';
  /** @format float */
  size?: number;
  /** @format int64 */
  horsepower_hp?: number;
  /** @format int64 */
  horsepower_rpm?: number;
  /** @format int64 */
  torque_ft_lbs?: number;
  /** @format int64 */
  torque_rpm?: number;
  /** @format int32 */
  valves?: number;
  /** @maxLength 32 */
  valve_timing?: 'Variable';
  /** @maxLength 64 */
  cam_type?: 'Double overhead cam (DOHC)' | 'Overhead valves (OHV)' | 'Single overhead cam (SOHC)';
  /** @maxLength 32 */
  drive_type?: 'all wheel drive' | 'four wheel drive' | 'front wheel drive' | 'rear wheel drive';
  /** @maxLength 64 */
  transmission?:
    | '1-speed direct drive'
    | '10-speed automatic'
    | '10-speed shiftable automatic'
    | '2-speed'
    | '2-speed automated manual'
    | '3-speed automatic'
    | '4-speed automatic'
    | '4-speed manual'
    | '4-speed shiftable automatic'
    | '5-speed automated manual'
    | '5-speed automatic'
    | '5-speed manual'
    | '5-speed shiftable automatic'
    | '6-speed automated manual'
    | '6-speed automatic'
    | '6-speed manual'
    | '6-speed shiftable automatic'
    | '7-speed automated manual'
    | '7-speed automatic'
    | '7-speed manual'
    | '7-speed shiftable automatic'
    | '8-speed automated manual'
    | '8-speed automatic'
    | '8-speed shiftable automatic'
    | '9-speed automated manual'
    | '9-speed automatic'
    | '9-speed shiftable automatic'
    | 'continuously variable-speed automatic'
    | 'continuously variable-speed shiftable automatic'
    | 'electrically variable-speed automatic';
}

export interface MakeModelTrimExteriorColor {
  /**
   * @format int64
   * @minLength 1
   */
  id?: number;
  /**
   * @format int64
   * @minLength 1
   */
  make_model_trim_id?: number;
  /**
   * @minLength 1
   * @maxLength 128
   */
  name?: string;
  /** @maxLength 16 */
  rgb?: string;
}

export interface MakeModelTrimInteriorColor {
  /**
   * @format int64
   * @minLength 1
   */
  id?: number;
  /**
   * @format int64
   * @minLength 1
   */
  make_model_trim_id?: number;
  /**
   * @minLength 1
   * @maxLength 128
   */
  name?: string;
  /** @maxLength 16 */
  rgb?: string;
}

/** EPA miles per gallon, ranges etc. */
export interface MakeModelTrimMileage {
  /**
   * @format int64
   * @minLength 1
   */
  id?: number;
  /**
   * @format int64
   * @minLength 1
   */
  make_model_trim_id?: number;
  /** @format float */
  fuel_tank_capacity?: number;
  /** @format int32 */
  combined_mpg?: number;
  /** @format int32 */
  epa_city_mpg?: number;
  /** @format int32 */
  epa_highway_mpg?: number;
  /** @format int32 */
  range_city?: number;
  /** @format int32 */
  range_highway?: number;
}

/** @example ["option a","option b ","option c"] */
export type VehicleAttribute = string[];

/** @example [2022,2021,2020] */
export type Year = number[];
