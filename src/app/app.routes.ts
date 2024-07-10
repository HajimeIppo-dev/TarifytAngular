import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { GrammarComponent } from './core/components/grammar/grammar.component';
import { DictionaryComponent } from './core/components/dictionary/dictionary.component';
import { RegularExpressionsComponent } from './core/components/regular-expressions/regular-expressions.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { PossessivePronounsComponent } from './core/components/grammar/Modules/possessive-pronouns/possessive-pronouns.component';
import { PrepositionsComponent } from './core/components/grammar/Modules/prepositions/prepositions.component';
import { SubjectivePronounsComponent } from './core/components/grammar/Modules/subjective-pronouns/subjective-pronouns.component';
import { ReflexivePronounsComponent } from './core/components/grammar/Modules/reflexive-pronouns/reflexive-pronouns.component';

export const routes: Routes = [
    { path: '' , redirectTo: '/home', pathMatch: 'full' } ,
    { path: 'home', component: HomeComponent } ,
    { path: 'dictionary', component: DictionaryComponent } ,
    { path: 'grammar', component: GrammarComponent,children: [
        { path: 'Prepositions', component: PrepositionsComponent },
        { path: 'Possesivepronouns', component: PossessivePronounsComponent },
        { path: 'Subjectivepronouns', component: SubjectivePronounsComponent },
        { path: 'Reflexivepronouns', component: ReflexivePronounsComponent }
      ]
     } ,
    
    { path: '**', component: NotfoundComponent },

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }