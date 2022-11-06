CREATE VIEW PUBLIC.ONLINE_USERS AS 
	SELECT
	    users.id,
	    users.last_seen
	FROM public.users
	WHERE (
	        users.last_seen >= (now() - '00:00:30':: interval)
	    )
; 