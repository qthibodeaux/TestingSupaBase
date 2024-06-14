-- Create the poster table
CREATE TABLE poster (
    name TEXT PRIMARY KEY
);

-- Create the thread table
CREATE TABLE thread (
    id INT PRIMARY KEY,
    title TEXT NOT NULL
);

-- Create the post table with foreign keys referencing poster and thread tables
CREATE TABLE post (
    id INT PRIMARY KEY,
    poster_name TEXT,
    thread_id INT,
    content TEXT,
    FOREIGN KEY (poster_name) REFERENCES poster(name),
    FOREIGN KEY (thread_id) REFERENCES thread(id)
);

-- Insert sample data into poster table
INSERT INTO poster (name) VALUES (1);
INSERT INTO poster (name) VALUES (2);
INSERT INTO poster (name) VALUES (3);

-- Insert sample data into thread table
INSERT INTO thread (id, title) VALUES (1, 'First Thread');
INSERT INTO thread (id, title) VALUES (2, 'Second Thread');
INSERT INTO thread (id, title) VALUES (3, 'Third Thread');

-- Insert sample data into post table
INSERT INTO post (id, poster_name, thread_id, content) VALUES (1, 1, 1, 'This is the first post.');
INSERT INTO post (id, poster_name, thread_id, content) VALUES (2, 2, 2, 'This is the second post.');
INSERT INTO post (id, poster_name, thread_id, content) VALUES (3, 3, 3, 'This is the third post.');
