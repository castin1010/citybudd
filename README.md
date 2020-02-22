### CITY BUDDIES

## Project setup

To setup the project locally, you need to clone the project from git, install the dependencies and setup an enviroment for the project
First we setup a virtual enviroment for python

> python3 -m virtualenv env 

We are using `python3 -m` above to make sure python3 is used in our virtualenv
Activate the virtualenv
> source env/bin/activate

We can now clone the project.
> git clone https://github.com/c-thehound/citybuddies.git

Install the django packages.
> cd citybuddies
> pip3 install -r requirements.txt

Once it's done, (or you could start a new terminal session/tab), install the react dependencies
> cd ui
> yarn install

Once both processes are complete, you need to create a database. We are using postgresql so make sure it's installed on your system.
If you followed the installation guide correctly, you should be able to run
> createdb citybuddies
which should create a new database.
Otherwise, do the following to create a new database
> sudo su - postgres
> psql
> create database citybuddies;
> \q
> CTLR+D

You should now be back to your regular terminal

Start the django development using
> python3 manage.py runserver

Start the react development server( on a seperate terminal window or tab ) using
> cd ui && yarn start

You can access the React app on your browser [here](http://localhost:3000) and the django app [here](http://127.0.0.1:8000)
## Project Description
The purpose of the project is to create a web-application for CityBuddies which allows students to log in to their profile and be able to work with their mentor as well as other mentees within their group.
The web-application will be divided into multiple categories allowing the users to search for useful information based on their education or even being able to click and visit other sections based on their mentee’s profile or their mentor’s profile. For instance, it would allow them to view the mentor’s/mentee’s contact details. This means that if they want to talk to their mentor in private they can go during their office hours. 

This web-application will also have a variety of useful tools/features such as group and private chat. This would make students participate more towards receiving guidance from the web-application because if they have any sort of queries they can write it on a group chat for everyone within the group to acknowledge and help them.

## Development Stack

# [Django](https://www.djangoproject.com)

To install Django you need pip, install using
> pip3 install django

To start a new django project
> django-admin startproject [projectname]

You'll see a new folder created called [projectname]
To create a new django app
> django-admin startapp [appname]
You'll see a new folder created called [appname]

These are the django project dependencies so far:
..*asgiref
..*Django==3.0.3
..*django-templated-mail==1.1.1
..*djangorestframework==3.11.0
..*djoser==2.0.3
..*Pillow==7.0.0
..*psyopg2-binary==2.8.4
..*pytz==2019.3
..*sqlparse==0.3.0

# [React](https://reactjs.org)

To start the development process immediately without having to setup a toolchain. Use a boilerplate
For these project we are `create-react-app`
Installation
> yarn add create-react-app

To start a new app
> yarn create react-app

To start the development server
> yarn start

These are the React dependencies so far:
..* [Fontawesome]()
> yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
> @testing-library/jest-dom": "^4.2.4",

..* [axios]()
> yarn add axios

..*[formik]()
> yarn add formik

..*[react-router-dom]()
> yarn add react-router-dom

..*[react-toggle-component]()
> yarn add react-toggle-component

..*[styled-components]()
> yarn add styled-components
