const PARSED_ORU = {
  name: null,
  value: null,
  children: [
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-1.F.64880|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-1.F.64880',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-C-SE-IS^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-C-SE-IS^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-C-SE-IS',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-C-SE-IS^NATA^2133^N|C-SE-IS^SE-IRON STUDIES^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||CH|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-C-SE-IS^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-C-SE-IS',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'C-SE-IS^SE-IRON STUDIES^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'C-SE-IS',
            },
            {
              name: 'OBR-4.1',
              value: 'SE-IRON STUDIES',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'CH',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|NM|14798-3^S Iron:^LN||8|umol/L^umol/L|5-30||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14798-3^S Iron:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14798-3',
            },
            {
              name: 'OBX-3.1',
              value: 'S Iron:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '8',
        },
        {
          name: 'OBX-6',
          value: 'umol/L^umol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'umol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'umol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '5-30',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|NM|3034-6^S Transferrin:^LN||2.3|g/L^g/L|2.0-3.2||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '3034-6^S Transferrin:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '3034-6',
            },
            {
              name: 'OBX-3.1',
              value: 'S Transferrin:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '2.3',
        },
        {
          name: 'OBX-6',
          value: 'g/L^g/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'g/L',
            },
            {
              name: 'OBX-6.1',
              value: 'g/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '2.0-3.2',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|3|NM|6796-7^Transferrin Saturation:^LN||14|%^%|10-45||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '6796-7^Transferrin Saturation:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '6796-7',
            },
            {
              name: 'OBX-3.1',
              value: 'Transferrin Saturation:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '14',
        },
        {
          name: 'OBX-6',
          value: '%^%',
          children: [
            {
              name: 'OBX-6.0',
              value: '%',
            },
            {
              name: 'OBX-6.1',
              value: '%',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '10-45',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|NM|2276-4^S Ferritin:^LN||135|ng/mL^ng/mL|30-500||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '2276-4^S Ferritin:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '2276-4',
            },
            {
              name: 'OBX-3.1',
              value: 'S Ferritin:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '135',
        },
        {
          name: 'OBX-6',
          value: 'ng/mL^ng/mL',
          children: [
            {
              name: 'OBX-6.0',
              value: 'ng/mL',
            },
            {
              name: 'OBX-6.1',
              value: 'ng/mL',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '30-500',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|5|FT|C010^SE-IRON STUDIES^2133||||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C010^SE-IRON STUDIES^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C010',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-IRON STUDIES',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|FT|C010^SE-IRON STUDIES^2133||Dept. Supervising Pathologist:Dr Andrew Carter||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C010^SE-IRON STUDIES^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C010',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-IRON STUDIES',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Dept. Supervising Pathologist:Dr Andrew Carter',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|C010^SE-IRON STUDIES^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C010^SE-IRON STUDIES^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C010',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-IRON STUDIES',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|8|FT|C010^SE-IRON STUDIES^2133||Tests Pending  : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '8',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C010^SE-IRON STUDIES^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C010',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-IRON STUDIES',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|9|FT|C010^SE-IRON STUDIES^2133||Sample Pending : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '9',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C010^SE-IRON STUDIES^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C010',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-IRON STUDIES',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-2.F.64881|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-2.F.64881',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-C-SE-FLS^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-C-SE-FLS^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-C-SE-FLS',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-C-SE-FLS^NATA^2133^N|C-SE-FLS^SE-LIPID - HDL/LDL^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||CH|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-C-SE-FLS^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-C-SE-FLS',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'C-SE-FLS^SE-LIPID - HDL/LDL^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'C-SE-FLS',
            },
            {
              name: 'OBR-4.1',
              value: 'SE-LIPID - HDL/LDL',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'CH',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|NM|14647-2^S Cholesterol:^LN||4.4|mmol/L^mmol/L|3.5-5.5||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14647-2^S Cholesterol:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14647-2',
            },
            {
              name: 'OBX-3.1',
              value: 'S Cholesterol:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '4.4',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '3.5-5.5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|NM|14927-8^S Triglycerides:^LN||0.5|mmol/L^mmol/L|<1.5||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14927-8^S Triglycerides:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14927-8',
            },
            {
              name: 'OBX-3.1',
              value: 'S Triglycerides:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '0.5',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '<1.5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|3|NM|14646-4^S HDL-Cholesterol:^LN||1.32|mmol/L^mmol/L|>1.00||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14646-4^S HDL-Cholesterol:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14646-4',
            },
            {
              name: 'OBX-3.1',
              value: 'S HDL-Cholesterol:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '1.32',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '>1.00',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|NM|22748-8^S LDL-Cholesterol:^LN||2.9|mmol/L^mmol/L|<3.5||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '22748-8^S LDL-Cholesterol:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '22748-8',
            },
            {
              name: 'OBX-3.1',
              value: 'S LDL-Cholesterol:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '2.9',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '<3.5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|5|NM|9830-1^Chol/HDLC^LN||3.3| ^ |<4.5||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '9830-1^Chol/HDLC^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '9830-1',
            },
            {
              name: 'OBX-3.1',
              value: 'Chol/HDLC',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '3.3',
        },
        {
          name: 'OBX-6',
          value: ' ^ ',
          children: [
            {
              name: 'OBX-6.0',
              value: ' ',
            },
            {
              name: 'OBX-6.1',
              value: ' ',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '<4.5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|NM|Non HDLC^Non HDL Cholesterol^2133||3.1|mmol/L^mmol/L|<3.9||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: 'Non HDLC^Non HDL Cholesterol^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'Non HDLC',
            },
            {
              name: 'OBX-3.1',
              value: 'Non HDL Cholesterol',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '3.1',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '<3.9',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|C012^SE-LIPID - HDL/LDL^2133||LIPID TARGET LEVELS:\\.br\\The treatment target levels for people at high risk of cardiovascular\\.br\\disease are:\\.br\\Total Cholesterol       <4.0 mmol/L\\.br\\Fasting Triglycerides   <2.0 mmol/L\\.br\\HDL-Cholesterol         >1.00 mmol/L\\.br\\LDL-Cholesterol         <2.5 mmol/L (<1.8 mmol/L if very high risk)\\.br\\Non-HDL Cholesterol     <3.3 mmol/L (<2.5 mmol/L if very high risk)\\.br\\\\.br\\Source: AACB Harmonised Lipid Reporting Guideline - 2018.\\.br\\\\.br\\Risk Calculator available at www.cvdcheck.org.au||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C012^SE-LIPID - HDL/LDL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C012',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-LIPID - HDL/LDL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'LIPID TARGET LEVELS:\\.br\\The treatment target levels for people at high risk of cardiovascular\\.br\\disease are:\\.br\\Total Cholesterol       <4.0 mmol/L\\.br\\Fasting Triglycerides   <2.0 mmol/L\\.br\\HDL-Cholesterol         >1.00 mmol/L\\.br\\LDL-Cholesterol         <2.5 mmol/L (<1.8 mmol/L if very high risk)\\.br\\Non-HDL Cholesterol     <3.3 mmol/L (<2.5 mmol/L if very high risk)\\.br\\\\.br\\Source: AACB Harmonised Lipid Reporting Guideline - 2018.\\.br\\\\.br\\Risk Calculator available at www.cvdcheck.org.au',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|8|FT|C012^SE-LIPID - HDL/LDL^2133||||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '8',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C012^SE-LIPID - HDL/LDL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C012',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-LIPID - HDL/LDL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|9|FT|C012^SE-LIPID - HDL/LDL^2133||Dept. Supervising Pathologist:Dr Andrew Carter||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '9',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C012^SE-LIPID - HDL/LDL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C012',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-LIPID - HDL/LDL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Dept. Supervising Pathologist:Dr Andrew Carter',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|10|FT|C012^SE-LIPID - HDL/LDL^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '10',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C012^SE-LIPID - HDL/LDL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C012',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-LIPID - HDL/LDL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|11|FT|C012^SE-LIPID - HDL/LDL^2133||Tests Pending  : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '11',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C012^SE-LIPID - HDL/LDL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C012',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-LIPID - HDL/LDL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|12|FT|C012^SE-LIPID - HDL/LDL^2133||Sample Pending : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '12',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C012^SE-LIPID - HDL/LDL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C012',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-LIPID - HDL/LDL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-3.F.64882|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-3.F.64882',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-C-SE-THYROID VIRTUAL^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-C-SE-THYROID VIRTUAL^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-C-SE-THYROID VIRTUAL',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-C-SE-THYROID VIRTUAL^NATA^2133^N|C-SE-THYROID VIRTUAL^SE-THYROID VIRTUAL^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||CH|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-C-SE-THYROID VIRTUAL^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-C-SE-THYROID VIRTUAL',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'C-SE-THYROID VIRTUAL^SE-THYROID VIRTUAL^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'C-SE-THYROID VIRTUAL',
            },
            {
              name: 'OBR-4.1',
              value: 'SE-THYROID VIRTUAL',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'CH',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|NM|3016-3^TSH (Roche)^LN||1.75|mU/L^mU/L|0.5-5.5||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '3016-3^TSH (Roche)^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '3016-3',
            },
            {
              name: 'OBX-3.1',
              value: 'TSH (Roche)',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '1.75',
        },
        {
          name: 'OBX-6',
          value: 'mU/L^mU/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mU/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mU/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '0.5-5.5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|FT|C187^SE-THYROID VIRTUAL^2133||Comment for SE-THYROID VIRTUAL\\.br\\A normal TSH is consistent with a euthyroid state.||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C187^SE-THYROID VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C187',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-THYROID VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Comment for SE-THYROID VIRTUAL\\.br\\A normal TSH is consistent with a euthyroid state.',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|3|FT|C187^SE-THYROID VIRTUAL^2133||||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C187^SE-THYROID VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C187',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-THYROID VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|FT|C187^SE-THYROID VIRTUAL^2133||Dept. Supervising Pathologist:Dr Andrew Carter||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C187^SE-THYROID VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C187',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-THYROID VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Dept. Supervising Pathologist:Dr Andrew Carter',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|5|FT|C187^SE-THYROID VIRTUAL^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C187^SE-THYROID VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C187',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-THYROID VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|FT|C187^SE-THYROID VIRTUAL^2133||Tests Pending  : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C187^SE-THYROID VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C187',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-THYROID VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|C187^SE-THYROID VIRTUAL^2133||Sample Pending : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C187^SE-THYROID VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C187',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-THYROID VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-4.F.64883|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-4.F.64883',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-C-SE-CRP^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-C-SE-CRP^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-C-SE-CRP',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-C-SE-CRP^NATA^2133^N|C-SE-CRP^SE-C-REACTIVE PROTEIN^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||CH|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-C-SE-CRP^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-C-SE-CRP',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'C-SE-CRP^SE-C-REACTIVE PROTEIN^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'C-SE-CRP',
            },
            {
              name: 'OBR-4.1',
              value: 'SE-C-REACTIVE PROTEIN',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'CH',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|NM|1988-5^S C-Reactive Protein:^LN||2|mg/L^mg/L|<5||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '1988-5^S C-Reactive Protein:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '1988-5',
            },
            {
              name: 'OBX-3.1',
              value: 'S C-Reactive Protein:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '2',
        },
        {
          name: 'OBX-6',
          value: 'mg/L^mg/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mg/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mg/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '<5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|FT|C290^SE-C-REACTIVE PROTEIN^2133||Specimen - Serum||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C290^SE-C-REACTIVE PROTEIN^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C290',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-C-REACTIVE PROTEIN',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Specimen - Serum',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|3|FT|C290^SE-C-REACTIVE PROTEIN^2133||||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C290^SE-C-REACTIVE PROTEIN^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C290',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-C-REACTIVE PROTEIN',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|FT|C290^SE-C-REACTIVE PROTEIN^2133||Dept. Supervising Pathologist:Dr Andrew Carter||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C290^SE-C-REACTIVE PROTEIN^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C290',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-C-REACTIVE PROTEIN',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Dept. Supervising Pathologist:Dr Andrew Carter',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|5|FT|C290^SE-C-REACTIVE PROTEIN^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C290^SE-C-REACTIVE PROTEIN^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C290',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-C-REACTIVE PROTEIN',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|FT|C290^SE-C-REACTIVE PROTEIN^2133||Tests Pending  : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C290^SE-C-REACTIVE PROTEIN^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C290',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-C-REACTIVE PROTEIN',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|C290^SE-C-REACTIVE PROTEIN^2133||Sample Pending : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C290^SE-C-REACTIVE PROTEIN^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C290',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-C-REACTIVE PROTEIN',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-5.F.64884|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-5.F.64884',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-C-SE-VITD^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-C-SE-VITD^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-C-SE-VITD',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-C-SE-VITD^NATA^2133^N|C-SE-VITD^SE-VITAMIN D^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||CH|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-C-SE-VITD^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-C-SE-VITD',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'C-SE-VITD^SE-VITAMIN D^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'C-SE-VITD',
            },
            {
              name: 'OBR-4.1',
              value: 'SE-VITAMIN D',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'CH',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    null,
    {
      name: 'OBX',
      value:
        'OBX|1|NM|14635-7^25-Hydroxy Vitamin D^LN||52|nmol/L^nmol/L|50-250||||F|||202306082320',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14635-7^25-Hydroxy Vitamin D^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14635-7',
            },
            {
              name: 'OBX-3.1',
              value: '25-Hydroxy Vitamin D',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '52',
        },
        {
          name: 'OBX-6',
          value: 'nmol/L^nmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'nmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'nmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '50-250',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082320',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|FT|C316^SE-VITAMIN D^2133||Vitamin D levels should ideally be above 50 nmol/L in winter and 70 nmol/L\\.br\\in summer. Levels above 75 nmol/L may be desirable in people with\\.br\\osteoporosis or falls.||||||F|||202306082320',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C316^SE-VITAMIN D^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C316',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-VITAMIN D',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Vitamin D levels should ideally be above 50 nmol/L in winter and 70 nmol/L\\.br\\in summer. Levels above 75 nmol/L may be desirable in people with\\.br\\osteoporosis or falls.',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082320',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|3|FT|C316^SE-VITAMIN D^2133||||||||F|||202306082320',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C316^SE-VITAMIN D^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C316',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-VITAMIN D',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082320',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|FT|C316^SE-VITAMIN D^2133||Dept. Supervising Pathologist:Dr Andrew Carter||||||F|||202306082320',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C316^SE-VITAMIN D^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C316',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-VITAMIN D',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Dept. Supervising Pathologist:Dr Andrew Carter',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082320',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|5|FT|C316^SE-VITAMIN D^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306082320',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C316^SE-VITAMIN D^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C316',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-VITAMIN D',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082320',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|FT|C316^SE-VITAMIN D^2133||Tests Pending  : ||||||F|||202306082320',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C316^SE-VITAMIN D^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C316',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-VITAMIN D',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082320',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|C316^SE-VITAMIN D^2133||Sample Pending : ||||||F|||202306082320',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C316^SE-VITAMIN D^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C316',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-VITAMIN D',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082320',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-6.F.64885|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-6.F.64885',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-C-SE-B12/FOLATE VIRT^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-C-SE-B12/FOLATE VIRT^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-C-SE-B12/FOLATE VIRT',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-C-SE-B12/FOLATE VIRT^NATA^2133^N|C-SE-B12/FOLATE VIRT^SE-B12/FOLATE VIRT^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||CH|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-C-SE-B12/FOLATE VIRT^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-C-SE-B12/FOLATE VIRT',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'C-SE-B12/FOLATE VIRT^SE-B12/FOLATE VIRT^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'C-SE-B12/FOLATE VIRT',
            },
            {
              name: 'OBR-4.1',
              value: 'SE-B12/FOLATE VIRT',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'CH',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|NM|14732-2^S Folate:^LN||28.0|nmol/L^nmol/L|>6.0||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14732-2^S Folate:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14732-2',
            },
            {
              name: 'OBX-3.1',
              value: 'S Folate:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '28.0',
        },
        {
          name: 'OBX-6',
          value: 'nmol/L^nmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'nmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'nmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '>6.0',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|NM|14685-2^Total Vitamin B12:^LN||423|pmol/L^pmol/L|200-700||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14685-2^Total Vitamin B12:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14685-2',
            },
            {
              name: 'OBX-3.1',
              value: 'Total Vitamin B12:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '423',
        },
        {
          name: 'OBX-6',
          value: 'pmol/L^pmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'pmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'pmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '200-700',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|3|FT|C329^SE-B12/FOLATE VIRT^2133||Comment for SE-B12/FOLATE VIRT\\.br\\High dose biotin (>5 mg/day) may artefactually increase total Vitamin B12\\.br\\and Folate results obtained by this method. If the patient is taking 5-20\\.br\\mg/day of biotin, suggest withhold for at least 8 hours before blood test\\.br\\(if taking 300 mg/day, withhold for at least 72 hours).\\.br\\For clinical enquiries please contact Chemical Pathologist Dr Ken Sikaris\\.br\\on 9287 7720.||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C329^SE-B12/FOLATE VIRT^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C329',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-B12/FOLATE VIRT',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Comment for SE-B12/FOLATE VIRT\\.br\\High dose biotin (>5 mg/day) may artefactually increase total Vitamin B12\\.br\\and Folate results obtained by this method. If the patient is taking 5-20\\.br\\mg/day of biotin, suggest withhold for at least 8 hours before blood test\\.br\\(if taking 300 mg/day, withhold for at least 72 hours).\\.br\\For clinical enquiries please contact Chemical Pathologist Dr Ken Sikaris\\.br\\on 9287 7720.',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|4|FT|C329^SE-B12/FOLATE VIRT^2133||||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C329^SE-B12/FOLATE VIRT^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C329',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-B12/FOLATE VIRT',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|5|FT|C329^SE-B12/FOLATE VIRT^2133||Dept. Supervising Pathologist:Dr Andrew Carter||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C329^SE-B12/FOLATE VIRT^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C329',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-B12/FOLATE VIRT',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Dept. Supervising Pathologist:Dr Andrew Carter',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|FT|C329^SE-B12/FOLATE VIRT^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C329^SE-B12/FOLATE VIRT^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C329',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-B12/FOLATE VIRT',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|C329^SE-B12/FOLATE VIRT^2133||Tests Pending  : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C329^SE-B12/FOLATE VIRT^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C329',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-B12/FOLATE VIRT',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|8|FT|C329^SE-B12/FOLATE VIRT^2133||Sample Pending : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '8',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C329^SE-B12/FOLATE VIRT^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C329',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-B12/FOLATE VIRT',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-7.F.64886|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-7.F.64886',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-C-U-ACR^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-C-U-ACR^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-C-U-ACR',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-C-U-ACR^NATA^2133^N|C-U-ACR^U-MICROALBUMIN RAND UR^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||CH|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-C-U-ACR^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-C-U-ACR',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'C-U-ACR^U-MICROALBUMIN RAND UR^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'C-U-ACR',
            },
            {
              name: 'OBR-4.1',
              value: 'U-MICROALBUMIN RAND UR',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'CH',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|SN|14957-5^U Albumin, random^LN||<^3|mg/L^mg/L|||||F|||202306090524',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'SN',
        },
        {
          name: 'OBX-3',
          value: '14957-5^U Albumin, random^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14957-5',
            },
            {
              name: 'OBX-3.1',
              value: 'U Albumin, random',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '<^3',
          children: [
            {
              name: 'OBX-5.0',
              value: '<',
            },
            {
              name: 'OBX-5.1',
              value: '3',
            },
          ],
        },
        {
          name: 'OBX-6',
          value: 'mg/L^mg/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mg/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mg/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090524',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|NM|14683-7^U Creatinine, random^LN||7.8|mmol/L^mmol/L|||||F|||202306090524',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14683-7^U Creatinine, random^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14683-7',
            },
            {
              name: 'OBX-3.1',
              value: 'U Creatinine, random',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '7.8',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090524',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|3|SN|32294-1^U Albumin/Creatinine ratio^LN||<^0.4|mg/mmol^mg/mmol|<2.5||||F|||202306090524',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'SN',
        },
        {
          name: 'OBX-3',
          value: '32294-1^U Albumin/Creatinine ratio^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '32294-1',
            },
            {
              name: 'OBX-3.1',
              value: 'U Albumin/Creatinine ratio',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '<^0.4',
          children: [
            {
              name: 'OBX-5.0',
              value: '<',
            },
            {
              name: 'OBX-5.1',
              value: '0.4',
            },
          ],
        },
        {
          name: 'OBX-6',
          value: 'mg/mmol^mg/mmol',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mg/mmol',
            },
            {
              name: 'OBX-6.1',
              value: 'mg/mmol',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '<2.5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090524',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|FT|C487^U-MICROALBUMIN RAND UR^2133||Albuminuria not detected in this sample. Unable to report the exact ratio\\.br\\as urine albumin is below the measuring range.\\.br\\\\.br\\For clinical enquiries, please contact Chemical Pathologist\\.br\\Dr Ken Sikaris on 9287 7720.||||||F|||202306090524',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C487^U-MICROALBUMIN RAND UR^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C487',
            },
            {
              name: 'OBX-3.1',
              value: 'U-MICROALBUMIN RAND UR',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Albuminuria not detected in this sample. Unable to report the exact ratio\\.br\\as urine albumin is below the measuring range.\\.br\\\\.br\\For clinical enquiries, please contact Chemical Pathologist\\.br\\Dr Ken Sikaris on 9287 7720.',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090524',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|5|FT|C487^U-MICROALBUMIN RAND UR^2133||||||||F|||202306090524',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C487^U-MICROALBUMIN RAND UR^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C487',
            },
            {
              name: 'OBX-3.1',
              value: 'U-MICROALBUMIN RAND UR',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090524',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|FT|C487^U-MICROALBUMIN RAND UR^2133||Dept. Supervising Pathologist:Dr Andrew Carter||||||F|||202306090524',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C487^U-MICROALBUMIN RAND UR^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C487',
            },
            {
              name: 'OBX-3.1',
              value: 'U-MICROALBUMIN RAND UR',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Dept. Supervising Pathologist:Dr Andrew Carter',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090524',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|C487^U-MICROALBUMIN RAND UR^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306090524',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C487^U-MICROALBUMIN RAND UR^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C487',
            },
            {
              name: 'OBX-3.1',
              value: 'U-MICROALBUMIN RAND UR',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090524',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|8|FT|C487^U-MICROALBUMIN RAND UR^2133||Tests Pending  : ||||||F|||202306090524',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '8',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C487^U-MICROALBUMIN RAND UR^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C487',
            },
            {
              name: 'OBX-3.1',
              value: 'U-MICROALBUMIN RAND UR',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090524',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|9|FT|C487^U-MICROALBUMIN RAND UR^2133||Sample Pending : ||||||F|||202306090524',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '9',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C487^U-MICROALBUMIN RAND UR^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C487',
            },
            {
              name: 'OBX-3.1',
              value: 'U-MICROALBUMIN RAND UR',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090524',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-8.F.64887|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-8.F.64887',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-C-SE- CHEMISTRY^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-C-SE- CHEMISTRY^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-C-SE- CHEMISTRY',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-C-SE- CHEMISTRY^NATA^2133^N|C-SE- CHEMISTRY^SE- CHEMISTRY^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||CH|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-C-SE- CHEMISTRY^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-C-SE- CHEMISTRY',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'C-SE- CHEMISTRY^SE- CHEMISTRY^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'C-SE- CHEMISTRY',
            },
            {
              name: 'OBR-4.1',
              value: 'SE- CHEMISTRY',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'CH',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|NM|2951-2^S Sodium:^LN||145|mmol/L^mmol/L|135-145||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '2951-2^S Sodium:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '2951-2',
            },
            {
              name: 'OBX-3.1',
              value: 'S Sodium:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '145',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '135-145',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|NM|2823-3^S Potassium:^LN||4.4|mmol/L^mmol/L|3.5-5.5||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '2823-3^S Potassium:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '2823-3',
            },
            {
              name: 'OBX-3.1',
              value: 'S Potassium:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '4.4',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '3.5-5.5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|3|NM|2075-0^S Chloride:^LN||105|mmol/L^mmol/L|95-110||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '2075-0^S Chloride:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '2075-0',
            },
            {
              name: 'OBX-3.1',
              value: 'S Chloride:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '105',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '95-110',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|FT|1963-8^S Bicarbonate:^LN||S Bicarbonate: See Below|mmol/L^mmol/L|||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: '1963-8^S Bicarbonate:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '1963-8',
            },
            {
              name: 'OBX-3.1',
              value: 'S Bicarbonate:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'S Bicarbonate: See Below',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|5|NM|22664-7^S Urea:^LN||5.3|mmol/L^mmol/L|3.0-8.0||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '22664-7^S Urea:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '22664-7',
            },
            {
              name: 'OBX-3.1',
              value: 'S Urea:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '5.3',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '3.0-8.0',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|NM|14682-9^S Creatinine:^LN||71|umol/L^umol/L|60-110||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14682-9^S Creatinine:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14682-9',
            },
            {
              name: 'OBX-3.1',
              value: 'S Creatinine:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '71',
        },
        {
          name: 'OBX-6',
          value: 'umol/L^umol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'umol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'umol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '60-110',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|7|SN|33914-3^eGFR^LN||>^90|^|>59||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'SN',
        },
        {
          name: 'OBX-3',
          value: '33914-3^eGFR^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '33914-3',
            },
            {
              name: 'OBX-3.1',
              value: 'eGFR',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '>^90',
          children: [
            {
              name: 'OBX-5.0',
              value: '>',
            },
            {
              name: 'OBX-5.1',
              value: '90',
            },
          ],
        },
        {
          name: 'OBX-6',
          value: '^',
          children: [
            {
              name: 'OBX-6.0',
              value: '',
            },
            {
              name: 'OBX-6.1',
              value: '',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '>59',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|8|NM|14631-6^S Bilirubin:^LN||6|umol/L^umol/L|4-20||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '8',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14631-6^S Bilirubin:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14631-6',
            },
            {
              name: 'OBX-3.1',
              value: 'S Bilirubin:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '6',
        },
        {
          name: 'OBX-6',
          value: 'umol/L^umol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'umol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'umol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '4-20',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|9|NM|12805-8^S Alkaline Phosphatase:^LN||53|U/L^U/L|35-110||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '9',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '12805-8^S Alkaline Phosphatase:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '12805-8',
            },
            {
              name: 'OBX-3.1',
              value: 'S Alkaline Phosphatase:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '53',
        },
        {
          name: 'OBX-6',
          value: 'U/L^U/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'U/L',
            },
            {
              name: 'OBX-6.1',
              value: 'U/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '35-110',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|10|NM|2324-2^S Gamma-GT:^LN||12|U/L^U/L|5-50||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '10',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '2324-2^S Gamma-GT:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '2324-2',
            },
            {
              name: 'OBX-3.1',
              value: 'S Gamma-GT:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '12',
        },
        {
          name: 'OBX-6',
          value: 'U/L^U/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'U/L',
            },
            {
              name: 'OBX-6.1',
              value: 'U/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '5-50',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|11|NM|1742-6^S ALT:^LN||17|U/L^U/L|5-40||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '11',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '1742-6^S ALT:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '1742-6',
            },
            {
              name: 'OBX-3.1',
              value: 'S ALT:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '17',
        },
        {
          name: 'OBX-6',
          value: 'U/L^U/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'U/L',
            },
            {
              name: 'OBX-6.1',
              value: 'U/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '5-40',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|12|NM|1920-8^S AST:^LN||19|U/L^U/L|10-40||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '12',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '1920-8^S AST:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '1920-8',
            },
            {
              name: 'OBX-3.1',
              value: 'S AST:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '19',
        },
        {
          name: 'OBX-6',
          value: 'U/L^U/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'U/L',
            },
            {
              name: 'OBX-6.1',
              value: 'U/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '10-40',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|13|NM|2885-2^S Total Protein:^LN||76|g/L^g/L|66-83||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '13',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '2885-2^S Total Protein:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '2885-2',
            },
            {
              name: 'OBX-3.1',
              value: 'S Total Protein:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '76',
        },
        {
          name: 'OBX-6',
          value: 'g/L^g/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'g/L',
            },
            {
              name: 'OBX-6.1',
              value: 'g/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '66-83',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|14|NM|1751-7^S Albumin:^LN||45|g/L^g/L|36-47||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '14',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '1751-7^S Albumin:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '1751-7',
            },
            {
              name: 'OBX-3.1',
              value: 'S Albumin:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '45',
        },
        {
          name: 'OBX-6',
          value: 'g/L^g/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'g/L',
            },
            {
              name: 'OBX-6.1',
              value: 'g/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '36-47',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|15|NM|10834-0^S Globulin:^LN||31|g/L^g/L|23-41||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '15',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '10834-0^S Globulin:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '10834-0',
            },
            {
              name: 'OBX-3.1',
              value: 'S Globulin:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '31',
        },
        {
          name: 'OBX-6',
          value: 'g/L^g/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'g/L',
            },
            {
              name: 'OBX-6.1',
              value: 'g/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '23-41',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|16|NM|2000-8^S Calcium:^LN||2.30|mmol/L^mmol/L|2.15-2.55||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '16',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '2000-8^S Calcium:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '2000-8',
            },
            {
              name: 'OBX-3.1',
              value: 'S Calcium:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '2.30',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '2.15-2.55',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|17|NM|29265-6^S Calcium (corrected)^LN||2.20|mmol/L^mmol/L|2.15-2.55||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '17',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '29265-6^S Calcium (corrected)^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '29265-6',
            },
            {
              name: 'OBX-3.1',
              value: 'S Calcium (corrected)',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '2.20',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '2.15-2.55',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|18|NM|14879-1^S Inorganic Phosphate:^LN||1.29|mmol/L^mmol/L|0.8-1.5||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '18',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14879-1^S Inorganic Phosphate:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14879-1',
            },
            {
              name: 'OBX-3.1',
              value: 'S Inorganic Phosphate:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '1.29',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '0.8-1.5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|19|NM|2601-3^S Magnesium:^LN||0.94|mmol/L^mmol/L|0.70-1.10||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '19',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '2601-3^S Magnesium:^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '2601-3',
            },
            {
              name: 'OBX-3.1',
              value: 'S Magnesium:',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '0.94',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '0.70-1.10',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|20|NM|14771-0^Fasting S Glucose^LN||5.3|mmol/L^mmol/L|3.6-6.0||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '20',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '14771-0^Fasting S Glucose^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '14771-0',
            },
            {
              name: 'OBX-3.1',
              value: 'Fasting S Glucose',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '5.3',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '3.6-6.0',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|21|FT|C950^SE- CHEMISTRY^2133||Comment for SE- CHEMISTRY\\.br\\eGFR is greater than 90 mL/min/1.73m2. No evidence of kidney disease.\\.br\\ \\.br\\Serum bicarb result not available due to sample evaporation.\\.br\\Suggest repeat if clinically indicated.\\.br\\For clinical enquiries, please contact Chemical Pathologist\\.br\\Dr Ken Sikaris on 9287 7720.||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '21',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C950^SE- CHEMISTRY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C950',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- CHEMISTRY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Comment for SE- CHEMISTRY\\.br\\eGFR is greater than 90 mL/min/1.73m2. No evidence of kidney disease.\\.br\\ \\.br\\Serum bicarb result not available due to sample evaporation.\\.br\\Suggest repeat if clinically indicated.\\.br\\For clinical enquiries, please contact Chemical Pathologist\\.br\\Dr Ken Sikaris on 9287 7720.',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|22|FT|C950^SE- CHEMISTRY^2133||||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '22',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C950^SE- CHEMISTRY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C950',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- CHEMISTRY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|23|FT|C950^SE- CHEMISTRY^2133||Dept. Supervising Pathologist:Dr Andrew Carter||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '23',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C950^SE- CHEMISTRY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C950',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- CHEMISTRY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Dept. Supervising Pathologist:Dr Andrew Carter',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|24|FT|C950^SE- CHEMISTRY^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '24',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C950^SE- CHEMISTRY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C950',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- CHEMISTRY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|25|FT|C950^SE- CHEMISTRY^2133||Tests Pending  : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '25',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C950^SE- CHEMISTRY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C950',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- CHEMISTRY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|26|FT|C950^SE- CHEMISTRY^2133||Sample Pending : ||||||F|||202306101318',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '26',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'C950^SE- CHEMISTRY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'C950',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- CHEMISTRY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306101318',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-9.F.64888|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-9.F.64888',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-H-ED- HBA1C VIRTUAL^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-H-ED- HBA1C VIRTUAL^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-H-ED- HBA1C VIRTUAL',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-H-ED- HBA1C VIRTUAL^NATA^2133^N|H-ED- HBA1C VIRTUAL^ED- DIABETES DIAGNOSIS^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||HM|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-H-ED- HBA1C VIRTUAL^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-H-ED- HBA1C VIRTUAL',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'H-ED- HBA1C VIRTUAL^ED- DIABETES DIAGNOSIS^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'H-ED- HBA1C VIRTUAL',
            },
            {
              name: 'OBR-4.1',
              value: 'ED- DIABETES DIAGNOSIS',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'HM',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|NM|17856-6^B Glycosylated Haemoglobin (Hb A1c):^LN||5.3|%^%|4.4-5.6||||F|||202306090909',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '17856-6^B Glycosylated Haemoglobin (Hb A1c):^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '17856-6',
            },
            {
              name: 'OBX-3.1',
              value: 'B Glycosylated Haemoglobin (Hb A1c):',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '5.3',
        },
        {
          name: 'OBX-6',
          value: '%^%',
          children: [
            {
              name: 'OBX-6.0',
              value: '%',
            },
            {
              name: 'OBX-6.1',
              value: '%',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '4.4-5.6',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090909',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|NM|59261-8^HBA1c (IFCC)^LN||34|mmol/mol^mmol/mol|25-38||||F|||202306090909',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '59261-8^HBA1c (IFCC)^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '59261-8',
            },
            {
              name: 'OBX-3.1',
              value: 'HBA1c (IFCC)',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '34',
        },
        {
          name: 'OBX-6',
          value: 'mmol/mol^mmol/mol',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/mol',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/mol',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '25-38',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090909',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|3|NM|53553-4^Estimated Average Glucose^LN||5.9|mmol/L^mmol/L|||||F|||202306090909',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '53553-4^Estimated Average Glucose^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '53553-4',
            },
            {
              name: 'OBX-3.1',
              value: 'Estimated Average Glucose',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '5.9',
        },
        {
          name: 'OBX-6',
          value: 'mmol/L^mmol/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mmol/L',
            },
            {
              name: 'OBX-6.1',
              value: 'mmol/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090909',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|FT|E301^ED- DIABETES DIAGNOSIS^2133||Comment for ED- DIABETES DIAGNOSIS\\.br\\HbA1c is Medicare rebateable, once per year, for diagnosis of diabetes\\.br\\mellitus in high risk people. The diagnostic cut-off is HbA1c >=6.5% (48\\.br\\mmol/mol) in patients with normal red cell turnover.\\.br\\For clinical enquiries, please contact Chemical Pathologists\\.br\\Dr Ken Sikaris / Dr Andrew Carter on 9287 7720.\\.br\\ \\.br\\From 19/01/2021 Melbourne Pathology will be using capillary electrophoresis\\.br\\to measure HbA1c. The results are directly comparable to our previous\\.br\\results measured by HPLC but are more precise, and more accurate, in the\\.br\\presence of many haemoglobin variants.||||||F|||202306090909',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E301^ED- DIABETES DIAGNOSIS^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E301',
            },
            {
              name: 'OBX-3.1',
              value: 'ED- DIABETES DIAGNOSIS',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Comment for ED- DIABETES DIAGNOSIS\\.br\\HbA1c is Medicare rebateable, once per year, for diagnosis of diabetes\\.br\\mellitus in high risk people. The diagnostic cut-off is HbA1c >=6.5% (48\\.br\\mmol/mol) in patients with normal red cell turnover.\\.br\\For clinical enquiries, please contact Chemical Pathologists\\.br\\Dr Ken Sikaris / Dr Andrew Carter on 9287 7720.\\.br\\ \\.br\\From 19/01/2021 Melbourne Pathology will be using capillary electrophoresis\\.br\\to measure HbA1c. The results are directly comparable to our previous\\.br\\results measured by HPLC but are more precise, and more accurate, in the\\.br\\presence of many haemoglobin variants.',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090909',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|5|FT|E301^ED- DIABETES DIAGNOSIS^2133||||||||F|||202306090909',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E301^ED- DIABETES DIAGNOSIS^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E301',
            },
            {
              name: 'OBX-3.1',
              value: 'ED- DIABETES DIAGNOSIS',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090909',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|FT|E301^ED- DIABETES DIAGNOSIS^2133||Dept Supervising Pathologist: Dr Linda Saravanan||||||F|||202306090909',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E301^ED- DIABETES DIAGNOSIS^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E301',
            },
            {
              name: 'OBX-3.1',
              value: 'ED- DIABETES DIAGNOSIS',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Dept Supervising Pathologist: Dr Linda Saravanan',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090909',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|E301^ED- DIABETES DIAGNOSIS^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306090909',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E301^ED- DIABETES DIAGNOSIS^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E301',
            },
            {
              name: 'OBX-3.1',
              value: 'ED- DIABETES DIAGNOSIS',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090909',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|8|FT|E301^ED- DIABETES DIAGNOSIS^2133||Tests Pending  : ||||||F|||202306090909',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '8',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E301^ED- DIABETES DIAGNOSIS^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E301',
            },
            {
              name: 'OBX-3.1',
              value: 'ED- DIABETES DIAGNOSIS',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090909',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|9|FT|E301^ED- DIABETES DIAGNOSIS^2133||Sample Pending : ||||||F|||202306090909',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '9',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E301^ED- DIABETES DIAGNOSIS^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E301',
            },
            {
              name: 'OBX-3.1',
              value: 'ED- DIABETES DIAGNOSIS',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306090909',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-10.F.64889|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-10.F.64889',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-S-SE-HIV NSI^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-S-SE-HIV NSI^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-S-SE-HIV NSI',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-S-SE-HIV NSI^NATA^2133^N|S-SE-HIV NSI^SE-HIV NEEDLESTICK^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||SR|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-S-SE-HIV NSI^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-S-SE-HIV NSI',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'S-SE-HIV NSI^SE-HIV NEEDLESTICK^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'S-SE-HIV NSI',
            },
            {
              name: 'OBR-4.1',
              value: 'SE-HIV NEEDLESTICK',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'SR',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|ST|HIV Ag/Ab^HIV Ag/Ab^2133||Negative|^|||||F|||202306082342',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'ST',
        },
        {
          name: 'OBX-3',
          value: 'HIV Ag/Ab^HIV Ag/Ab^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'HIV Ag/Ab',
            },
            {
              name: 'OBX-3.1',
              value: 'HIV Ag/Ab',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Negative',
        },
        {
          name: 'OBX-6',
          value: '^',
          children: [
            {
              name: 'OBX-6.0',
              value: '',
            },
            {
              name: 'OBX-6.1',
              value: '',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082342',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|FT|E858^SE-HIV NEEDLESTICK^2133||No evidence of current HIV infection.\\.br\\Consider repeat testing in 6-8 weeks if acute infection is suspected.\\.br\\ \\.br\\High dose biotin may affect the result(s) obtained by this method.\\.br\\If biotin interference needs to be excluded, please phone our Medical\\.br\\Microbiologist on 9287 7700 for advice.\\.br\\||||||F|||202306082342',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E858^SE-HIV NEEDLESTICK^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E858',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HIV NEEDLESTICK',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'No evidence of current HIV infection.\\.br\\Consider repeat testing in 6-8 weeks if acute infection is suspected.\\.br\\ \\.br\\High dose biotin may affect the result(s) obtained by this method.\\.br\\If biotin interference needs to be excluded, please phone our Medical\\.br\\Microbiologist on 9287 7700 for advice.\\.br\\',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082342',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|3|FT|E858^SE-HIV NEEDLESTICK^2133||||||||F|||202306082342',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E858^SE-HIV NEEDLESTICK^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E858',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HIV NEEDLESTICK',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082342',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|FT|E858^SE-HIV NEEDLESTICK^2133||Pathologists: Drs L Waring,C Perera,G Robertson||||||F|||202306082342',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E858^SE-HIV NEEDLESTICK^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E858',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HIV NEEDLESTICK',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Pathologists: Drs L Waring,C Perera,G Robertson',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082342',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|5|FT|E858^SE-HIV NEEDLESTICK^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306082342',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E858^SE-HIV NEEDLESTICK^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E858',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HIV NEEDLESTICK',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082342',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|FT|E858^SE-HIV NEEDLESTICK^2133||Tests Pending  : ||||||F|||202306082342',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E858^SE-HIV NEEDLESTICK^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E858',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HIV NEEDLESTICK',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082342',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|E858^SE-HIV NEEDLESTICK^2133||Sample Pending : ||||||F|||202306082342',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'E858^SE-HIV NEEDLESTICK^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'E858',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HIV NEEDLESTICK',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082342',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-11.F.64890|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-11.F.64890',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-H-ED-HAEMATOLOGY^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-H-ED-HAEMATOLOGY^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-H-ED-HAEMATOLOGY',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-H-ED-HAEMATOLOGY^NATA^2133^N|H-ED-HAEMATOLOGY^ED-HAEMATOLOGY^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||HM|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-H-ED-HAEMATOLOGY^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-H-ED-HAEMATOLOGY',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'H-ED-HAEMATOLOGY^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'H-ED-HAEMATOLOGY',
            },
            {
              name: 'OBR-4.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'HM',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|NM|718-7^HAEMOGLOBIN^LN||136|g/L^g/L|130-180||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '718-7^HAEMOGLOBIN^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '718-7',
            },
            {
              name: 'OBX-3.1',
              value: 'HAEMOGLOBIN',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '136',
        },
        {
          name: 'OBX-6',
          value: 'g/L^g/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'g/L',
            },
            {
              name: 'OBX-6.1',
              value: 'g/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '130-180',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|NM|4544-3^Haematocrit^LN||0.40|^|0.39-0.51||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '4544-3^Haematocrit^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '4544-3',
            },
            {
              name: 'OBX-3.1',
              value: 'Haematocrit',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '0.40',
        },
        {
          name: 'OBX-6',
          value: '^',
          children: [
            {
              name: 'OBX-6.0',
              value: '',
            },
            {
              name: 'OBX-6.1',
              value: '',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '0.39-0.51',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|3|NM|789-8^Red cell count^LN||4.4|x10*12/L^x10*12/L|4.3-5.8||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '789-8^Red cell count^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '789-8',
            },
            {
              name: 'OBX-3.1',
              value: 'Red cell count',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '4.4',
        },
        {
          name: 'OBX-6',
          value: 'x10*12/L^x10*12/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'x10*12/L',
            },
            {
              name: 'OBX-6.1',
              value: 'x10*12/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '4.3-5.8',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|4|NM|787-2^M.C.V.^LN||91|fL^fL|80-100||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '787-2^M.C.V.^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '787-2',
            },
            {
              name: 'OBX-3.1',
              value: 'M.C.V.',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '91',
        },
        {
          name: 'OBX-6',
          value: 'fL^fL',
          children: [
            {
              name: 'OBX-6.0',
              value: 'fL',
            },
            {
              name: 'OBX-6.1',
              value: 'fL',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '80-100',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|5|NM|785-6^M.C.H.^LN||31|pg^pg|27-34||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '785-6^M.C.H.^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '785-6',
            },
            {
              name: 'OBX-3.1',
              value: 'M.C.H.',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '31',
        },
        {
          name: 'OBX-6',
          value: 'pg^pg',
          children: [
            {
              name: 'OBX-6.0',
              value: 'pg',
            },
            {
              name: 'OBX-6.1',
              value: 'pg',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '27-34',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|NM|786-4^M.C.H.C.^LN||337|g/L^g/L|310-360||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '786-4^M.C.H.C.^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '786-4',
            },
            {
              name: 'OBX-3.1',
              value: 'M.C.H.C.',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '337',
        },
        {
          name: 'OBX-6',
          value: 'g/L^g/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'g/L',
            },
            {
              name: 'OBX-6.1',
              value: 'g/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '310-360',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|7|NM|788-0^RDW^LN||13.8|^|11-17||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '788-0^RDW^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '788-0',
            },
            {
              name: 'OBX-3.1',
              value: 'RDW',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '13.8',
        },
        {
          name: 'OBX-6',
          value: '^',
          children: [
            {
              name: 'OBX-6.0',
              value: '',
            },
            {
              name: 'OBX-6.1',
              value: '',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '11-17',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|8|NM|777-3^PLATELETS^LN||211|x 10*9/L^x 10*9/L|150-450||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '8',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '777-3^PLATELETS^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '777-3',
            },
            {
              name: 'OBX-3.1',
              value: 'PLATELETS',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '211',
        },
        {
          name: 'OBX-6',
          value: 'x 10*9/L^x 10*9/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'x 10*9/L',
            },
            {
              name: 'OBX-6.1',
              value: 'x 10*9/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '150-450',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|9|NM|6690-2^WHITE CELL COUNT^LN||4.1|x10*9/L^x10*9/L|4.0-11.0||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '9',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '6690-2^WHITE CELL COUNT^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '6690-2',
            },
            {
              name: 'OBX-3.1',
              value: 'WHITE CELL COUNT',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '4.1',
        },
        {
          name: 'OBX-6',
          value: 'x10*9/L^x10*9/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'x10*9/L',
            },
            {
              name: 'OBX-6.1',
              value: 'x10*9/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '4.0-11.0',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|10|NM|751-8^Neutrophils^LN||2.1|x10*9/L^x10*9/L|2.0-7.5||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '10',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '751-8^Neutrophils^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '751-8',
            },
            {
              name: 'OBX-3.1',
              value: 'Neutrophils',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '2.1',
        },
        {
          name: 'OBX-6',
          value: 'x10*9/L^x10*9/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'x10*9/L',
            },
            {
              name: 'OBX-6.1',
              value: 'x10*9/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '2.0-7.5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|11|NM|731-0^Lymphocytes^LN||1.7|x10*9/L^x10*9/L|1.0-4.0||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '11',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '731-0^Lymphocytes^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '731-0',
            },
            {
              name: 'OBX-3.1',
              value: 'Lymphocytes',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '1.7',
        },
        {
          name: 'OBX-6',
          value: 'x10*9/L^x10*9/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'x10*9/L',
            },
            {
              name: 'OBX-6.1',
              value: 'x10*9/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '1.0-4.0',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|12|NM|742-7^Monocytes^LN||0.3|x10*9/L^x10*9/L|0-1.0||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '12',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '742-7^Monocytes^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '742-7',
            },
            {
              name: 'OBX-3.1',
              value: 'Monocytes',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '0.3',
        },
        {
          name: 'OBX-6',
          value: 'x10*9/L^x10*9/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'x10*9/L',
            },
            {
              name: 'OBX-6.1',
              value: 'x10*9/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '0-1.0',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|13|NM|711-2^Eosinophils^LN||0.1|x10*9/L^x10*9/L|0-0.5||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '13',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '711-2^Eosinophils^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '711-2',
            },
            {
              name: 'OBX-3.1',
              value: 'Eosinophils',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '0.1',
        },
        {
          name: 'OBX-6',
          value: 'x10*9/L^x10*9/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'x10*9/L',
            },
            {
              name: 'OBX-6.1',
              value: 'x10*9/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '0-0.5',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|14|NM|704-7^Basophils^LN||0.0|x10*9/L^x10*9/L|0-0.3||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '14',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '704-7^Basophils^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '704-7',
            },
            {
              name: 'OBX-3.1',
              value: 'Basophils',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '0.0',
        },
        {
          name: 'OBX-6',
          value: 'x10*9/L^x10*9/L',
          children: [
            {
              name: 'OBX-6.0',
              value: 'x10*9/L',
            },
            {
              name: 'OBX-6.1',
              value: 'x10*9/L',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '0-0.3',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|15|NM|4537-7^E.S.R.^LN||15|mm/hr^mm/hr|1-10|H|||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '15',
        },
        {
          name: 'OBX-2',
          value: 'NM',
        },
        {
          name: 'OBX-3',
          value: '4537-7^E.S.R.^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '4537-7',
            },
            {
              name: 'OBX-3.1',
              value: 'E.S.R.',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '15',
        },
        {
          name: 'OBX-6',
          value: 'mm/hr^mm/hr',
          children: [
            {
              name: 'OBX-6.0',
              value: 'mm/hr',
            },
            {
              name: 'OBX-6.1',
              value: 'mm/hr',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '1-10',
        },
        {
          name: 'OBX-8',
          value: 'H',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|16|FT|H900^ED-HAEMATOLOGY^2133||||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '16',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|17|FT|H900^ED-HAEMATOLOGY^2133||||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '17',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|18|FT|H900^ED-HAEMATOLOGY^2133||Report 394255555 updated on 08/06/2023 at 22:17: Additional Test(s) Reported:||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '18',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Report 394255555 updated on 08/06/2023 at 22:17: Additional Test(s) Reported:',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|19|FT|H900^ED-HAEMATOLOGY^2133||ERYTHROCYTE SED RATE||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '19',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'ERYTHROCYTE SED RATE',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|20|FT|H900^ED-HAEMATOLOGY^2133||||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '20',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|21|FT|H900^ED-HAEMATOLOGY^2133||** UPDATED REPORT **||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '21',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '** UPDATED REPORT **',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|22|FT|H900^ED-HAEMATOLOGY^2133||||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '22',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|23|FT|H900^ED-HAEMATOLOGY^2133||Dept Supervising Pathologist: Dr Linda Saravanan||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '23',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Dept Supervising Pathologist: Dr Linda Saravanan',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|24|FT|H900^ED-HAEMATOLOGY^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '24',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|25|FT|H900^ED-HAEMATOLOGY^2133||Tests Pending  : ||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '25',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|26|FT|H900^ED-HAEMATOLOGY^2133||Sample Pending : ||||||F|||202306082217',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '26',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'H900^ED-HAEMATOLOGY^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'H900',
            },
            {
              name: 'OBX-3.1',
              value: 'ED-HAEMATOLOGY',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082217',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-12.F.64891|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-12.F.64891',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-S-SE-HEPATITIS VIRTUAL^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-S-SE-HEPATITIS VIRTUAL^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-S-SE-HEPATITIS VIRTUAL',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-S-SE-HEPATITIS VIRTUAL^NATA^2133^N|S-SE-HEPATITIS VIRTUAL^SE-HEPATITIS VIRTUAL^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||SR|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-S-SE-HEPATITIS VIRTUAL^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-S-SE-HEPATITIS VIRTUAL',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'S-SE-HEPATITIS VIRTUAL^SE-HEPATITIS VIRTUAL^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'S-SE-HEPATITIS VIRTUAL',
            },
            {
              name: 'OBR-4.1',
              value: 'SE-HEPATITIS VIRTUAL',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'SR',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|ST|5195-3^HepB surface antigen^LN||Negative|^|||||F|||202306082352',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'ST',
        },
        {
          name: 'OBX-3',
          value: '5195-3^HepB surface antigen^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '5195-3',
            },
            {
              name: 'OBX-3.1',
              value: 'HepB surface antigen',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Negative',
        },
        {
          name: 'OBX-6',
          value: '^',
          children: [
            {
              name: 'OBX-6.0',
              value: '',
            },
            {
              name: 'OBX-6.1',
              value: '',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082352',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|FT|I131^SE-HEPATITIS VIRTUAL^2133||Comment for SE-HEPATITIS VIRTUAL\\.br\\High dose biotin may affect the result(s) obtained by this method. If\\.br\\biotin interference needs to be excluded, please phone our Medical\\.br\\Microbiologist on 92877700 for advice.\\.br\\No serological evidence of current Hepatitis B infection.\\.br\\Consider repeat testing in 6-8 weeks if acute infection is suspected.\\.br\\ \\.br\\High dose biotin may affect the result(s) obtained by this method.\\.br\\If biotin interference needs to be excluded, please phone our Medical\\.br\\Microbiologist on 9287 7700 for advice.\\.br\\||||||F|||202306082352',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I131^SE-HEPATITIS VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I131',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HEPATITIS VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Comment for SE-HEPATITIS VIRTUAL\\.br\\High dose biotin may affect the result(s) obtained by this method. If\\.br\\biotin interference needs to be excluded, please phone our Medical\\.br\\Microbiologist on 92877700 for advice.\\.br\\No serological evidence of current Hepatitis B infection.\\.br\\Consider repeat testing in 6-8 weeks if acute infection is suspected.\\.br\\ \\.br\\High dose biotin may affect the result(s) obtained by this method.\\.br\\If biotin interference needs to be excluded, please phone our Medical\\.br\\Microbiologist on 9287 7700 for advice.\\.br\\',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082352',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|3|FT|I131^SE-HEPATITIS VIRTUAL^2133||||||||F|||202306082352',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I131^SE-HEPATITIS VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I131',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HEPATITIS VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082352',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|FT|I131^SE-HEPATITIS VIRTUAL^2133||Pathologists: Drs L Waring,C Perera,G Robertson||||||F|||202306082352',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I131^SE-HEPATITIS VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I131',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HEPATITIS VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Pathologists: Drs L Waring,C Perera,G Robertson',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082352',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|5|FT|I131^SE-HEPATITIS VIRTUAL^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306082352',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I131^SE-HEPATITIS VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I131',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HEPATITIS VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082352',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|FT|I131^SE-HEPATITIS VIRTUAL^2133||Tests Pending  : ||||||F|||202306082352',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I131^SE-HEPATITIS VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I131',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HEPATITIS VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082352',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|I131^SE-HEPATITIS VIRTUAL^2133||Sample Pending : ||||||F|||202306082352',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I131^SE-HEPATITIS VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I131',
            },
            {
              name: 'OBX-3.1',
              value: 'SE-HEPATITIS VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082352',
        },
      ],
    },
    {
      name: 'MSH',
      value:
        'MSH|^~\\&|MPS|NATA^2133^N|||202307192134+1000||ORU^R01|20230719-13.F.64892|P|2.3|4||NE|AL|AU',
      children: [
        {
          name: 'MSH-0',
          value: 'MSH',
        },
        {
          name: 'MSH-2',
          value: '^~\\&',
        },
        {
          name: 'MSH-3',
          value: 'MPS',
        },
        {
          name: 'MSH-4',
          value: 'NATA^2133^N',
          children: [
            {
              name: 'MSH-4.0',
              value: 'NATA',
            },
            {
              name: 'MSH-4.1',
              value: '2133',
            },
            {
              name: 'MSH-4.2',
              value: 'N',
            },
          ],
        },
        {
          name: 'MSH-5',
          value: '',
        },
        {
          name: 'MSH-6',
          value: '',
        },
        {
          name: 'MSH-7',
          value: '202307192134+1000',
        },
        {
          name: 'MSH-8',
          value: '',
        },
        {
          name: 'MSH-9',
          value: 'ORU^R01',
          children: [
            {
              name: 'MSH-9.0',
              value: 'ORU',
            },
            {
              name: 'MSH-9.1',
              value: 'R01',
            },
          ],
        },
        {
          name: 'MSH-10',
          value: '20230719-13.F.64892',
        },
        {
          name: 'MSH-11',
          value: 'P',
        },
        {
          name: 'MSH-12',
          value: '2.3',
        },
        {
          name: 'MSH-13',
          value: '4',
        },
        {
          name: 'MSH-14',
          value: '',
        },
        {
          name: 'MSH-15',
          value: 'NE',
        },
        {
          name: 'MSH-16',
          value: 'AL',
        },
        {
          name: 'MSH-17',
          value: 'AU',
        },
      ],
    },
    {
      name: 'PID',
      value:
        'PID|1||394255555^^^NATA&2133&N||SMITH^JOHN^^^DR||19700101|M|||EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU||^^^^^^0455555555|^^^^^^|||||4295855555||||||||',
      children: [
        {
          name: 'PID-0',
          value: 'PID',
        },
        {
          name: 'PID-1',
          value: '1',
        },
        {
          name: 'PID-2',
          value: '',
        },
        {
          name: 'PID-3',
          value: '394255555^^^NATA&2133&N',
          children: [
            {
              name: 'PID-3.0',
              value: '394255555',
            },
            {
              name: 'PID-3.1',
              value: '',
            },
            {
              name: 'PID-3.2',
              value: '',
            },
            {
              name: 'PID-3.3',
              value: 'NATA&2133&N',
            },
          ],
        },
        {
          name: 'PID-4',
          value: '',
        },
        {
          name: 'PID-5',
          value: 'SMITH^JOHN^^^DR',
          children: [
            {
              name: 'PID-5.0',
              value: 'SMITH',
            },
            {
              name: 'PID-5.1',
              value: 'JOHN',
            },
            {
              name: 'PID-5.2',
              value: '',
            },
            {
              name: 'PID-5.3',
              value: '',
            },
            {
              name: 'PID-5.4',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PID-6',
          value: '',
        },
        {
          name: 'PID-7',
          value: '19700101',
        },
        {
          name: 'PID-8',
          value: 'M',
        },
        {
          name: 'PID-9',
          value: '',
        },
        {
          name: 'PID-10',
          value: '',
        },
        {
          name: 'PID-11',
          value: 'EXAMPLE STREET^^TEST SUBURB^VIC^3149^AU',
          children: [
            {
              name: 'PID-11.0',
              value: 'EXAMPLE STREET',
            },
            {
              name: 'PID-11.1',
              value: '',
            },
            {
              name: 'PID-11.2',
              value: 'TEST SUBURB',
            },
            {
              name: 'PID-11.3',
              value: 'VIC',
            },
            {
              name: 'PID-11.4',
              value: '3149',
            },
            {
              name: 'PID-11.5',
              value: 'AU',
            },
          ],
        },
        {
          name: 'PID-12',
          value: '',
        },
        {
          name: 'PID-13',
          value: '^^^^^^0455555555',
          children: [
            {
              name: 'PID-13.0',
              value: '',
            },
            {
              name: 'PID-13.1',
              value: '',
            },
            {
              name: 'PID-13.2',
              value: '',
            },
            {
              name: 'PID-13.3',
              value: '',
            },
            {
              name: 'PID-13.4',
              value: '',
            },
            {
              name: 'PID-13.5',
              value: '',
            },
            {
              name: 'PID-13.6',
              value: '0455555555',
            },
          ],
        },
        {
          name: 'PID-14',
          value: '^^^^^^',
          children: [
            {
              name: 'PID-14.0',
              value: '',
            },
            {
              name: 'PID-14.1',
              value: '',
            },
            {
              name: 'PID-14.2',
              value: '',
            },
            {
              name: 'PID-14.3',
              value: '',
            },
            {
              name: 'PID-14.4',
              value: '',
            },
            {
              name: 'PID-14.5',
              value: '',
            },
            {
              name: 'PID-14.6',
              value: '',
            },
          ],
        },
        {
          name: 'PID-15',
          value: '',
        },
        {
          name: 'PID-16',
          value: '',
        },
        {
          name: 'PID-17',
          value: '',
        },
        {
          name: 'PID-18',
          value: '',
        },
        {
          name: 'PID-19',
          value: '4295855555',
        },
        {
          name: 'PID-20',
          value: '',
        },
        {
          name: 'PID-21',
          value: '',
        },
        {
          name: 'PID-22',
          value: '',
        },
        {
          name: 'PID-23',
          value: '',
        },
        {
          name: 'PID-24',
          value: '',
        },
        {
          name: 'PID-25',
          value: '',
        },
        {
          name: 'PID-26',
          value: '',
        },
        {
          name: 'PID-27',
          value: '',
        },
      ],
    },
    {
      name: 'PV1',
      value:
        'PV1|1|O||||||4466067B^SIMPSON^DIDI^^^DR|4466067B^SIMPSON^DIDI^^^DR|||||||||||',
      children: [
        {
          name: 'PV1-0',
          value: 'PV1',
        },
        {
          name: 'PV1-1',
          value: '1',
        },
        {
          name: 'PV1-2',
          value: 'O',
        },
        {
          name: 'PV1-3',
          value: '',
        },
        {
          name: 'PV1-4',
          value: '',
        },
        {
          name: 'PV1-5',
          value: '',
        },
        {
          name: 'PV1-6',
          value: '',
        },
        {
          name: 'PV1-7',
          value: '',
        },
        {
          name: 'PV1-8',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-8.0',
              value: '4466067B',
            },
            {
              name: 'PV1-8.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-8.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-8.3',
              value: '',
            },
            {
              name: 'PV1-8.4',
              value: '',
            },
            {
              name: 'PV1-8.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-9',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'PV1-9.0',
              value: '4466067B',
            },
            {
              name: 'PV1-9.1',
              value: 'SIMPSON',
            },
            {
              name: 'PV1-9.2',
              value: 'DIDI',
            },
            {
              name: 'PV1-9.3',
              value: '',
            },
            {
              name: 'PV1-9.4',
              value: '',
            },
            {
              name: 'PV1-9.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'PV1-10',
          value: '',
        },
        {
          name: 'PV1-11',
          value: '',
        },
        {
          name: 'PV1-12',
          value: '',
        },
        {
          name: 'PV1-13',
          value: '',
        },
        {
          name: 'PV1-14',
          value: '',
        },
        {
          name: 'PV1-15',
          value: '',
        },
        {
          name: 'PV1-16',
          value: '',
        },
        {
          name: 'PV1-17',
          value: '',
        },
        {
          name: 'PV1-18',
          value: '',
        },
        {
          name: 'PV1-19',
          value: '',
        },
        {
          name: 'PV1-20',
          value: '',
        },
      ],
    },
    {
      name: 'ORC',
      value:
        'ORC|RE||394255555-S-SE- HEP C VIRTUAL^NATA^2133^N||CM|||||||4466067B^SIMPSON^DIDI^^^DR',
      children: [
        {
          name: 'ORC-0',
          value: 'ORC',
        },
        {
          name: 'ORC-1',
          value: 'RE',
        },
        {
          name: 'ORC-2',
          value: '',
        },
        {
          name: 'ORC-3',
          value: '394255555-S-SE- HEP C VIRTUAL^NATA^2133^N',
          children: [
            {
              name: 'ORC-3.0',
              value: '394255555-S-SE- HEP C VIRTUAL',
            },
            {
              name: 'ORC-3.1',
              value: 'NATA',
            },
            {
              name: 'ORC-3.2',
              value: '2133',
            },
            {
              name: 'ORC-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'ORC-4',
          value: '',
        },
        {
          name: 'ORC-5',
          value: 'CM',
        },
        {
          name: 'ORC-6',
          value: '',
        },
        {
          name: 'ORC-7',
          value: '',
        },
        {
          name: 'ORC-8',
          value: '',
        },
        {
          name: 'ORC-9',
          value: '',
        },
        {
          name: 'ORC-10',
          value: '',
        },
        {
          name: 'ORC-11',
          value: '',
        },
        {
          name: 'ORC-12',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'ORC-12.0',
              value: '4466067B',
            },
            {
              name: 'ORC-12.1',
              value: 'SIMPSON',
            },
            {
              name: 'ORC-12.2',
              value: 'DIDI',
            },
            {
              name: 'ORC-12.3',
              value: '',
            },
            {
              name: 'ORC-12.4',
              value: '',
            },
            {
              name: 'ORC-12.5',
              value: 'DR',
            },
          ],
        },
      ],
    },
    {
      name: 'OBR',
      value:
        'OBR|1||394255555-S-SE- HEP C VIRTUAL^NATA^2133^N|S-SE- HEP C VIRTUAL^SE- HEP C VIRTUAL^2133||20230530|202306080950+1000||||||general health check +|202306080950+1000||4466067B^SIMPSON^DIDI^^^DR||||LN&394255555||202307192134+1000||SR|F||^^^20230530^^S||',
      children: [
        {
          name: 'OBR-0',
          value: 'OBR',
        },
        {
          name: 'OBR-1',
          value: '1',
        },
        {
          name: 'OBR-2',
          value: '',
        },
        {
          name: 'OBR-3',
          value: '394255555-S-SE- HEP C VIRTUAL^NATA^2133^N',
          children: [
            {
              name: 'OBR-3.0',
              value: '394255555-S-SE- HEP C VIRTUAL',
            },
            {
              name: 'OBR-3.1',
              value: 'NATA',
            },
            {
              name: 'OBR-3.2',
              value: '2133',
            },
            {
              name: 'OBR-3.3',
              value: 'N',
            },
          ],
        },
        {
          name: 'OBR-4',
          value: 'S-SE- HEP C VIRTUAL^SE- HEP C VIRTUAL^2133',
          children: [
            {
              name: 'OBR-4.0',
              value: 'S-SE- HEP C VIRTUAL',
            },
            {
              name: 'OBR-4.1',
              value: 'SE- HEP C VIRTUAL',
            },
            {
              name: 'OBR-4.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBR-5',
          value: '',
        },
        {
          name: 'OBR-6',
          value: '20230530',
        },
        {
          name: 'OBR-7',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-8',
          value: '',
        },
        {
          name: 'OBR-9',
          value: '',
        },
        {
          name: 'OBR-10',
          value: '',
        },
        {
          name: 'OBR-11',
          value: '',
        },
        {
          name: 'OBR-12',
          value: '',
        },
        {
          name: 'OBR-13',
          value: 'general health check +',
        },
        {
          name: 'OBR-14',
          value: '202306080950+1000',
        },
        {
          name: 'OBR-15',
          value: '',
        },
        {
          name: 'OBR-16',
          value: '4466067B^SIMPSON^DIDI^^^DR',
          children: [
            {
              name: 'OBR-16.0',
              value: '4466067B',
            },
            {
              name: 'OBR-16.1',
              value: 'SIMPSON',
            },
            {
              name: 'OBR-16.2',
              value: 'DIDI',
            },
            {
              name: 'OBR-16.3',
              value: '',
            },
            {
              name: 'OBR-16.4',
              value: '',
            },
            {
              name: 'OBR-16.5',
              value: 'DR',
            },
          ],
        },
        {
          name: 'OBR-17',
          value: '',
        },
        {
          name: 'OBR-18',
          value: '',
        },
        {
          name: 'OBR-19',
          value: '',
        },
        {
          name: 'OBR-20',
          value: 'LN&394255555',
        },
        {
          name: 'OBR-21',
          value: '',
        },
        {
          name: 'OBR-22',
          value: '202307192134+1000',
        },
        {
          name: 'OBR-23',
          value: '',
        },
        {
          name: 'OBR-24',
          value: 'SR',
        },
        {
          name: 'OBR-25',
          value: 'F',
        },
        {
          name: 'OBR-26',
          value: '',
        },
        {
          name: 'OBR-27',
          value: '^^^20230530^^S',
          children: [
            {
              name: 'OBR-27.0',
              value: '',
            },
            {
              name: 'OBR-27.1',
              value: '',
            },
            {
              name: 'OBR-27.2',
              value: '',
            },
            {
              name: 'OBR-27.3',
              value: '20230530',
            },
            {
              name: 'OBR-27.4',
              value: '',
            },
            {
              name: 'OBR-27.5',
              value: 'S',
            },
          ],
        },
        {
          name: 'OBR-28',
          value: '',
        },
        {
          name: 'OBR-29',
          value: '',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|1|ST|22327-1^Hepatitis C Antibodies (by Murex EIA):^LN||Negative|^|||||F|||202306082333',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '1',
        },
        {
          name: 'OBX-2',
          value: 'ST',
        },
        {
          name: 'OBX-3',
          value: '22327-1^Hepatitis C Antibodies (by Murex EIA):^LN',
          children: [
            {
              name: 'OBX-3.0',
              value: '22327-1',
            },
            {
              name: 'OBX-3.1',
              value: 'Hepatitis C Antibodies (by Murex EIA):',
            },
            {
              name: 'OBX-3.2',
              value: 'LN',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Negative',
        },
        {
          name: 'OBX-6',
          value: '^',
          children: [
            {
              name: 'OBX-6.0',
              value: '',
            },
            {
              name: 'OBX-6.1',
              value: '',
            },
          ],
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082333',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|2|FT|I150^SE- HEP C VIRTUAL^2133||Comment for SE- HEP C VIRTUAL\\.br\\No serological evidence of Hepatitis C infection.\\.br\\Consider repeat testing in 6-8 weeks if acute infection is suspected.\\.br\\ \\.br\\High dose biotin may affect the result(s) obtained by this method. If\\.br\\biotin interference needs to be excluded, please phone our Medical\\.br\\microbiologist on 92877700 for advice.\\.br\\||||||F|||202306082333',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '2',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I150^SE- HEP C VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I150',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- HEP C VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Comment for SE- HEP C VIRTUAL\\.br\\No serological evidence of Hepatitis C infection.\\.br\\Consider repeat testing in 6-8 weeks if acute infection is suspected.\\.br\\ \\.br\\High dose biotin may affect the result(s) obtained by this method. If\\.br\\biotin interference needs to be excluded, please phone our Medical\\.br\\microbiologist on 92877700 for advice.\\.br\\',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082333',
        },
      ],
    },
    {
      name: 'OBX',
      value: 'OBX|3|FT|I150^SE- HEP C VIRTUAL^2133||||||||F|||202306082333',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '3',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I150^SE- HEP C VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I150',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- HEP C VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: '',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082333',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|4|FT|I150^SE- HEP C VIRTUAL^2133||Pathologists: Drs L Waring,C Perera,G Robertson||||||F|||202306082333',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '4',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I150^SE- HEP C VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I150',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- HEP C VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Pathologists: Drs L Waring,C Perera,G Robertson',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082333',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|5|FT|I150^SE- HEP C VIRTUAL^2133||Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI||||||F|||202306082333',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '5',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I150^SE- HEP C VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I150',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- HEP C VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value:
            'Tests Completed:  HEPATITIS INFO,IS,FLS,CA,TSH,EUC,LFT,PHOS,GF,CRP,VITD,FOL,B12,MG,ACR, A1C,HEPB-NSI,HIV NSI,FBE,ESR,HEPC-NSI',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082333',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|6|FT|I150^SE- HEP C VIRTUAL^2133||Tests Pending  : ||||||F|||202306082333',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '6',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I150^SE- HEP C VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I150',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- HEP C VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Tests Pending  : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082333',
        },
      ],
    },
    {
      name: 'OBX',
      value:
        'OBX|7|FT|I150^SE- HEP C VIRTUAL^2133||Sample Pending : ||||||F|||202306082333',
      children: [
        {
          name: 'OBX-0',
          value: 'OBX',
        },
        {
          name: 'OBX-1',
          value: '7',
        },
        {
          name: 'OBX-2',
          value: 'FT',
        },
        {
          name: 'OBX-3',
          value: 'I150^SE- HEP C VIRTUAL^2133',
          children: [
            {
              name: 'OBX-3.0',
              value: 'I150',
            },
            {
              name: 'OBX-3.1',
              value: 'SE- HEP C VIRTUAL',
            },
            {
              name: 'OBX-3.2',
              value: '2133',
            },
          ],
        },
        {
          name: 'OBX-4',
          value: '',
        },
        {
          name: 'OBX-5',
          value: 'Sample Pending : ',
        },
        {
          name: 'OBX-6',
          value: '',
        },
        {
          name: 'OBX-7',
          value: '',
        },
        {
          name: 'OBX-8',
          value: '',
        },
        {
          name: 'OBX-9',
          value: '',
        },
        {
          name: 'OBX-10',
          value: '',
        },
        {
          name: 'OBX-11',
          value: 'F',
        },
        {
          name: 'OBX-12',
          value: '',
        },
        {
          name: 'OBX-13',
          value: '',
        },
        {
          name: 'OBX-14',
          value: '202306082333',
        },
      ],
    },
    null,
  ],
};
