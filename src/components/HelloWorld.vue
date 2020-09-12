<template>
  <v-container>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Select a file
        <small>Import a CSV file containing all your sessions</small>
      </v-stepper-step>
  
      <v-stepper-content step="1">
        <v-card color="grey lighten-4" class="mb-12" height="70px">
            <simple-csv-parser :columns="columns" @on-load="onLoad" @on-error="onError"></simple-csv-parser>
        </v-card>
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 2" step="2">Sign-in to your Google account</v-stepper-step>
  
      <v-stepper-content step="2">
      
          <v-banner v-if='!authorized'>
            <v-avatar
              slot="icon"
              color="primary"
              size="40"
            >
              <v-icon
                icon="mdi-lock"
                color="white"
              >
                mdi-lock
              </v-icon>
            </v-avatar>

            Please log in to your Google account

            <template v-slot:actions>
              <v-btn text color="error" @click="handleAuthClick">Sign In</v-btn>
            </template>
          </v-banner>

          <v-banner v-if='authorized'>
            <v-avatar
              slot="icon"
              color="primary"
              size="40"
            >
              <v-icon
                icon="mdi-lock"
                color="white"
              >
                mdi-lock
              </v-icon>
            </v-avatar>

            Your are already signed-in

            <template v-slot:actions>
              <v-btn text color="error" @click="handleSignoutClick">Sign Out</v-btn>
            </template>
          </v-banner>         
      
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn text @click="e6 = 1">Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 3" step="3">Create events</v-stepper-step>
  
      <v-stepper-content step="3">
        <v-banner>Events will be created in your 'primary' calendar</v-banner>
       
        <v-btn color="primary" @click="createEvent">Continue</v-btn>
        <v-btn text @click="e6 = 2">Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step step="4">Done !</v-stepper-step>
      <v-stepper-content step="4">
        <v-banner>Events have been created ! Check your Google Calendar :-)</v-banner>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>

  import { SimpleCsvParser } from 'vue-simple-csv-parser';

  export default {
    name: 'HelloWorld',
    
    components: {
      SimpleCsvParser,
    },

    data: () => ({
      e6: 1,
      columns: [
          { name: 'Date', value: 'Date' },
          { name: 'DayOfweek', value: 'dayOfWeek' },
          { name: 'Period', value: 'period' },
          { name: 'StartTime', value: 'startTime' },
          { name: 'EndTime', value: 'endTime' },
          { name: 'Session', value: 'session', isOptional: true },
          { name: 'Emails', value: 'emails', isOptional: true },
          { name: 'Location', value: 'location', isOptional: true },
        ],
        results: null,

        calendarName: "",
        authorized: false,
        api: undefined,
    }),


    created() {
      if (this.$isAuthenticated()) {
        this.authorized = true;
      }
    },

    methods: {
      onLoad(results) {
        this.results = results;
      },
      onError(message) {
        // handle error;
        console.log(message)
      },

      /**
       *  Sign in the user upon button click.
       */
      handleAuthClick() {
         this.$login()
          .then(() => {
            this.authorized = true;
          });
      },      

       /**
       *  Sign out the user upon button click.
       */
      handleSignoutClick() {
        this.$logout()
          .then(() => {
            this.authorized = false;
          });
      },

      createEvent() {

        this.$getGapiClient().then((gapi) => {
        
          var batch = gapi.client.newBatch();
        
          this.results.forEach((event) => {
            if(event.Session) {
              var startDate = this.$moment(event.Date + " " + event.StartTime, "DD/MM/YY hh:mm:ss");
              var endDate = this.$moment(event.Date + " " + event.EndTime, "DD/MM/YY hh:mm:ss");             

              var newEvent = {
                'summary': event.Session,
                'description': event.Session,
                'start': {
                  'dateTime': startDate.toDate()
                },
                'end': {
                  'dateTime': endDate.toDate()
                },
              }; 

              if(event.Location) {
                newEvent.location = event.Location;
              }

              if(event.GroupEmail) {
                newEvent.attendees = [
                  {'email': event.GroupEmail}
                ]
              }

              batch.add(gapi.client.calendar.events.insert({
                  'calendarId': 'primary',
                  'resource': newEvent
              }));
            }
            
          }); 

          batch.then(function(){
            console.log('all jobs done!!!');
            
          });


        }).then(() => {this.e6 = 4;});
      },
    }
  }
</script>
