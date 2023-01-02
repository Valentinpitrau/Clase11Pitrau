import express from 'express';
import {Server : HttpServer} from 'http';
import {Server : IOServer} from 'socket.io';


const express = require('express');
const {Server : IOServer} = require ('socket.io');
const {Server : HttpServer} = require ('http');


const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);


