SELECT
    task_id
    ,name
    ,description
    ,user

FROM guest.Tasks

/*I would imagine that this would be filtered by user either on the back-end, or on the front-end by applying some sort of authentication logic*/