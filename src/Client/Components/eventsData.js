
const data = [
    {
        timeStart: new Date('2021-09-09T17:00:00-04:00'),
        timeEnd:   new Date('2021-09-09T18:00:00-04:00'),
        name: 'Opening Ceremony',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-09T18:00:00-04:00'),
        timeEnd:   new Date('2021-09-09T19:00:00-04:00'),
        name: 'Guided Tour',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-09T19:00:00-04:00'),
        timeEnd:   new Date('2021-09-09T21:00:00-04:00'),
        name: 'Muse Concert Series with Special Guests',
        host: 'VRCon2',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-09T21:00:00-04:00'),
        timeEnd:   new Date('2021-09-09T22:00:00-04:00'),
        name: 'Science outreach in VR',
        host: 'VRCon3',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-09T22:00:00-04:00'),
        timeEnd:   new Date('2021-09-09T23:00:00-04:00'),
        name: 'How to Combined ALL your VRC Worlds into ONE',
        host: 'VRCon1',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-10T03:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T04:00:00-04:00'),
        name: 'Casual Hangout',
        host: 'VRCon1',
    },
    {
        timeStart: new Date('2021-09-10T04:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T05:00:00-04:00'),
        name: 'Film Festival Watch Party',
        host: 'VRCon2',
    },
    {
        timeStart: new Date('2021-09-10T05:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T06:00:00-04:00'),
        name: 'Worldhop',
        host: 'VRCon3',
    },
    {
        timeStart: new Date('2021-09-10T06:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T07:00:00-04:00'),
        name: 'Putt Putt Pond',
        host: 'VRCon1',
    },
    {
        timeStart: new Date('2021-09-10T07:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T08:00:00-04:00'),
        name: 'Climbing',
        host: 'VRCon2',
    },
    {
        timeStart: new Date('2021-09-10T08:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T09:00:00-04:00'),
        name: 'casual pool',
        host: 'VRCon3',
    },
    {
        timeStart: new Date('2021-09-10T09:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T10:00:00-04:00'),
        name: 'Waifuwehr-Tour',
        host: 'VRCon1',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-10T10:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T11:00:00-04:00'),
        name: 'No Friends Friends Club',
        host: 'VRCon2',
        liveStreamHost: 'okaykuro',
    },
    {
        timeStart: new Date('2021-09-10T11:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T13:00:00-04:00'),
        name: 'Tygre, The Singing Furry',
        host: 'VRCon3',
    },
    {
        timeStart: new Date('2021-09-10T13:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T14:00:00-04:00'),
        name: 'New Player Meetup / Mini Intro To VRChat',
        host: 'VRCon1',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-10T14:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T15:00:00-04:00'),
        name: 'World Hopping w/ New Players',
        host: 'VRCon1',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-10T14:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T16:00:00-04:00'),
        name: 'Pool Tournament',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-10T16:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T19:00:00-04:00'),
        name: 'Dance Cypher',
        host: 'VRCon1',
        liveStreamHost: 'ida_vrc_irl',
    },
    {
        timeStart: new Date('2021-09-10T19:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T20:00:00-04:00'),
        name: 'LGBT+ in VRC',
        host: 'VRCon2',
        liveStreamHost: 'nerdynanny',
    },
    {
        timeStart: new Date('2021-09-10T20:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T21:00:00-04:00'),
        name: 'Quiz Show!',
        host: 'ImprovMod',
        liveStreamHost: 'gobloxvr',
    },
    {
        timeStart: new Date('2021-09-10T21:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T22:00:00-04:00'),
        name: 'What Is VRCRoleplay?',
        host: 'VRCon3',
    },
    {
        timeStart: new Date('2021-09-10T22:00:00-04:00'),
        timeEnd:   new Date('2021-09-10T23:00:00-04:00'),
        name: 'VRC Roleplay: Let\'s Get Improvisational!',
        host: 'VRCon1',
    },
    {
        timeStart: new Date('2021-09-11T03:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T04:00:00-04:00'),
        name: 'Muder Game',
        host: 'VRCon1',
    },
    {
        timeStart: new Date('2021-09-11T04:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T05:00:00-04:00'),
        name: 'Quest World Hop',
        host: 'VRCon2',
    },
    {
        timeStart: new Date('2021-09-11T05:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T06:00:00-04:00'),
        name: 'Citrus0range\'s Warhammer Avatar PVP Showcase/Battle',
        host: 'VRCon3',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-11T06:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T07:00:00-04:00'),
        name: 'SCP Foundation of VRC site tour',
        host: 'VRCon1',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-11T07:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T08:00:00-04:00'),
        name: 'LPD Behind the Scenes',
        host: 'VRCon2',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-11T08:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T09:00:00-04:00'),
        name: 'Storytime with Magnanix',
        host: 'VRCon3',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-11T09:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T10:00:00-04:00'),
        name: 'Film Festival Watch Party',
        host: 'VRCon1',
    },
    {
        timeStart: new Date('2021-09-11T10:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T11:00:00-04:00'),
        name: 'Finding Your Voice in VR',
        host: 'VRCon2',
        liveStreamHost: 'frostedfricks',
    },
    {
        timeStart: new Date('2021-09-11T11:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T12:00:00-04:00'),
        name: 'Deaf Culture Panel',
        host: 'VRCon3',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-11T12:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T13:00:00-04:00'),
        name: 'Saturday Squats',
        host: 'VRCon1',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-11T13:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T14:00:00-04:00'),
        name: 'IM_NAKU LIVE',
        host: 'VRCon2',
        liveStreamHost: 'im_naku',
    },
    {
        timeStart: new Date('2021-09-11T14:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T14:30:00-04:00'),
        name: 'AdzySlayer Live Performance!',
        host: 'VRCon3',
        liveStreamHost: 'adzyslayer',
    },
    {
        timeStart: new Date('2021-09-11T14:30:00-04:00'),
        timeEnd:   new Date('2021-09-11T15:00:00-04:00'),
        name: 'March with the Kitten Marching Band',
        host: 'VRCon1',
    },
    {
        timeStart: new Date('2021-09-11T15:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T18:30:00-04:00'),
        name: 'Laserdome',
        liveStreamHost: 'xcirrex',
    },
    {
        timeStart: new Date('2021-09-11T16:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T18:00:00-04:00'),
        name: 'Open RP for New comers',
        host: 'VRCon1',
    },
    {
        timeStart: new Date('2021-09-11T18:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T19:00:00-04:00'),
        name: 'Improv Workshop',
        host: 'ImprovMod',
        liveStreamHost: 'gobloxvr',
    },
    {
        timeStart: new Date('2021-09-11T19:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T21:00:00-04:00'),
        name: 'Talent Show',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-11T21:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T21:30:00-04:00'),
        name: 'What\'s in the box?',
    },
    {
        timeStart: new Date('2021-09-11T21:30:00-04:00'),
        timeEnd:   new Date('2021-09-11T22:00:00-04:00'),
        name: 'VR Pole Dancing - Next level of fitness',
        host: 'VRCon3',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-11T22:00:00-04:00'),
        timeEnd:   new Date('2021-09-11T23:00:00-04:00'),
        name: 'VRTravellers Presents: The Pilot',
    },
    {
        timeStart: new Date('2021-09-12T03:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T04:00:00-04:00'),
        name: 'Would you rather',
        host: 'VRCon1',
    },
    {
        timeStart: new Date('2021-09-12T04:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T05:00:00-04:00'),
        name: 'Freeze Tag',
        host: 'VRCon2',
    },
    {
        timeStart: new Date('2021-09-12T05:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T06:00:00-04:00'),
        name: 'Werewolf',
        host: 'VRCon3',
    },
    {
        timeStart: new Date('2021-09-12T06:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T07:00:00-04:00'),
        name: 'Quest Mini Golf',
        host: 'VRCon1',
    },
    {
        timeStart: new Date('2021-09-12T07:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T08:00:00-04:00'),
        name: 'Treasure Hunt',
        host: 'VRCon2',
    },
    {
        timeStart: new Date('2021-09-12T08:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T09:00:00-04:00'),
        name: 'VR dance showcase by the SXSW2021 champion YOIKAMI',
        host: 'VRCon3',
    },
    {
        timeStart: new Date('2021-09-12T09:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T10:00:00-04:00'),
        name: 'Community Spotlight: Kitten Marching Band',
        host: 'VRCon1',
    },
    {
        timeStart: new Date('2021-09-12T10:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T11:00:00-04:00'),
        name: 'Explore VRChat World Hop',
        host: 'VRCon2',
    },
    {
        timeStart: new Date('2021-09-12T11:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T12:30:00-04:00'),
        name: 'Find your Voice: voice training workshop',
        host: 'VRCon3',
        liveStreamHost: 'virtualilly',
    },
    {
        timeStart: new Date('2021-09-12T12:30:00-04:00'),
        timeEnd:   new Date('2021-09-12T13:00:00-04:00'),
        name: 'Film Festival Watch Party',
        host: 'VRCon2',
    },
    {
        timeStart: new Date('2021-09-12T13:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T14:00:00-04:00'),
        name: 'Introduction to VR Sign Language',
        host: 'VRCon1',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-12T14:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T15:00:00-04:00'),
        name: 'The Amazing Spider-Lair Experience',
        host: 'VRCon3',
    },
    {
        timeStart: new Date('2021-09-12T15:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T16:00:00-04:00'),
        name: 'VRCLens Filmmaking & Photography Workshop',
        host: 'VRCon1',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-12T16:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T17:00:00-04:00'),
        name: 'Meme showcase 2',
        host: 'VRCon2',
        liveStreamHost: 'cyberchimptv',
    },
    {
        timeStart: new Date('2021-09-12T17:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T18:00:00-04:00'),
        name: 'MrCreepyPasta’s Storytime',
        host: 'VRCon3',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-12T18:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T19:00:00-04:00'),
        name: 'VRChat Movie Panel',
        host: 'VRCon1',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-12T19:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T20:00:00-04:00'),
        name: 'Boneworks dev talk on future of VR',
        host: 'VRCon2',
        liveStreamHost: 'vrconlive',
    },
    {
        timeStart: new Date('2021-09-12T20:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T21:00:00-04:00'),
        name: 'Belly Dance Lesson',
        host: 'VRCon3',
        liveStreamHost: 'dustydustbunny',
    },
    {
        timeStart: new Date('2021-09-12T21:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T22:00:00-04:00'),
        name: 'Improv Show',
        host: 'ImprovMod',
        liveStreamHost: 'gobloxvr',
    },
    {
        timeStart: new Date('2021-09-12T20:00:00-04:00'),
        timeEnd:   new Date('2021-09-12T21:00:00-04:00'),
        name: 'Closing Ceremony',
        isStreamed: true,
        liveStreamHost: 'vrconlive',
    },
]

export default data;
