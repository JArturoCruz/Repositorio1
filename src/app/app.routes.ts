import { Routes } from '@angular/router';
import path from 'node:path';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { Component } from '@angular/core';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';

export const routes: Routes = [
    {
        path: '',
        component: PrimerDiaComponent
    },
    {
        path: 'primer-dia',
        component: PrimerDiaComponent
    },
    {
        path: 'segundo-dia',
        component: SegundoDiaComponent
    },
    {
        path: 'tercer-dia',
        component: TercerDiaComponent
    }

];