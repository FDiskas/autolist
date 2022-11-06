CREATE TABLE
    public.users (
        id uuid DEFAULT public.gen_random_uuid() NOT NULL,
        name text NOT NULL,
        email text NOT NULL,
        display_name text,
        bio text,
        phone_number text,
        timezone text,
        created_at timestamp
        with
            time zone DEFAULT now() NOT NULL,
            updated_at timestamp
        with
            time zone DEFAULT now() NOT NULL,
            last_seen timestamp
        with
            time zone,
            password text NOT NULL
    );