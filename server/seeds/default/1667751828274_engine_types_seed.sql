SET check_function_bodies = false;

INSERT INTO
    public.engine_types (name)
VALUES ('diesel'), ('electric'), ('electric (fuel cell)'), ('flex-fuel (FFV)'), ('gas'), ('hybrid'), ('mild hybrid'), ('natural gas (CNG)'), ('plug-in hybrid');

INSERT INTO
    public.body_types (name)
VALUES ('Cargo Van'), ('Convertible'), ('Coupe'), ('Ext Van'), ('Hatchback'), ('Minivan'), ('Passenger Van'), ('Sedan'), ('SUV'), ('Truck (Access Cab)'), ('Truck (Cab Plus)'), ('Truck (Club Cab)'), ('Truck (Crew Cab)'), ('Truck (CrewMax)'), ('Truck (Double Cab)'), ('Truck (Extended Cab)'), ('Truck (King Cab)'), ('Truck (Mega Cab)'), ('Truck (Quad Cab)'), ('Truck (Regular Cab)'), ('Truck (SuperCab)'), ('Truck (SuperCrew)'), ('Truck (Xtracab)'), ('Van'), ('Wagon');

INSERT INTO
    public.fuel_types (name)
VALUES ('diesel fuel'), ('electric'), (
        'flex-fuel (premium unleaded recommended/E85)'
    ), (
        'flex-fuel (premium unleaded required/E85)'
    ), ('flex-fuel (unleaded/E85)'), (
        'flex-fuel (unleaded/natural gas)'
    ), ('hydrogen'), ('natural gas'), (
        'premium unleaded (recommended)'
    ), (
        'premium unleaded (required)'
    ), ('regular unleaded');

INSERT INTO
    public.cylinder_types (name)
VALUES ('fla'), ('I2'), ('I3'), ('I4'), ('I5'), ('I6'), ('rot'), ('V10'), ('V12'), ('V6'), ('V8'), ('W12'), ('W16'), ('W8');

INSERT INTO
    public.cam_types (name)
VALUES ('Double overhead cam (DOHC)'), ('Overhead valves (OHV)'), ('Single overhead cam (SOHC)');

INSERT INTO
    public.drive_types (name)
VALUES ('all wheel drive'), ('four wheel drive'), ('front wheel drive'), ('rear wheel drive');

INSERT INTO
    public.transmission_types (name)
VALUES ('1-speed direct drive'), ('10-speed automatic'), (
        '10-speed shiftable automatic'
    ), ('2-speed'), ('2-speed automated manual'), ('3-speed automatic'), ('4-speed automatic'), ('4-speed manual'), (
        '4-speed shiftable automatic'
    ), ('5-speed automated manual'), ('5-speed automatic'), ('5-speed manual'), (
        '5-speed shiftable automatic'
    ), ('6-speed automated manual'), ('6-speed automatic'), ('6-speed manual'), (
        '6-speed shiftable automatic'
    ), ('7-speed automated manual'), ('7-speed automatic'), ('7-speed manual'), (
        '7-speed shiftable automatic'
    ), ('8-speed automated manual'), ('8-speed automatic'), (
        '8-speed shiftable automatic'
    ), ('9-speed automated manual'), ('9-speed automatic'), (
        '9-speed shiftable automatic'
    ), (
        'continuously variable-speed automatic'
    ), (
        'continuously variable-speed shiftable automatic'
    ), (
        'electrically variable-speed automatic'
    );

INSERT INTO
    public.drive_types (name)
VALUES ('all wheel drive'), ('four wheel drive'), ('front wheel drive'), ('rear wheel drive');

INSERT INTO public.makes (name)
VALUES ('Acura'), ('Alfa Romeo'), ('Aston Martin'), ('Audi'), ('Bentley'), ('BMW'), ('Buick'), ('Cadillac'), ('Chevrolet'), ('Chrysler'), ('Dodge'), ('FIAT'), ('Ford'), ('Genesis'), ('GMC'), ('Honda'), ('Hyundai'), ('INFINITI'), ('Jaguar'), ('Jeep'), ('Kia'), ('Lamborghini'), ('Land Rover'), ('Lexus'), ('Lincoln'), ('Lotus'), ('Maserati'), ('Mazda'), ('McLaren'), ('Mercedes-Benz'), ('MINI'), ('Mitsubishi'), ('Nissan'), ('Polestar'), ('Porsche'), ('Ram'), ('Rolls-Royce'), ('Subaru'), ('Tesla'), ('Toyota'), ('Volkswagen'), ('Volvo');

INSERT INTO
    public.models (make_id, name)
VALUES (6, '1 Series'), (6, '2 Series'), (6, '3 Series'), (6, '4 Series'), (6, '5 Series'), (6, '6 Series'), (6, '7 Series'), (6, '8 Series'), (6, 'Alpina B7'), (6, 'M'), (6, 'M2'), (6, 'M3'), (6, 'M4'), (6, 'M5'), (6, 'M6'), (6, 'X1'), (6, 'X2'), (6, 'X3'), (6, 'X4'), (6, 'X5'), (6, 'X5 M'), (6, 'X6'), (6, 'X6 M'), (6, 'X7'), (6, 'Z3'), (6, 'Z4'), (6, 'Z4 M'), (6, 'Z8'), (6, 'i3'), (6, 'i8');