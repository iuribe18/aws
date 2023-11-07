# EFS Service
Requirements
1. Amazon EFS File systems
2. C

## Authors
- [@iuribe18](https://www.github.com/iuribe18)

# Create EFS Service Console
1. Amazon EFS
2. Create file system
3. Customize
3a. Name
3b. Storage Class (Standard)
3c. Automatic backups: Enable Automatic backups (disable)
3d. Encryption: Enable encryption of data at rest (disable)
3e. Performance settings: Throughput mode (Enhanced)
3f. Performance settings: Elastic (Recommended)
4. Network access
4a. VPC
4b. Mount Targets: (Az, Subnet, SecurityGroup)
5. Security group (port 2049)

## Screenshots
![Customize](https://github.com/iuribe18/aws/assets/78730753/8952ad42-42c7-4d01-8231-9d5da9701d4d)
![Options](https://github.com/iuribe18/aws/assets/78730753/5cecdf0c-0813-4467-826b-1d382d453d10)
![Mount Targets](https://github.com/iuribe18/aws/assets/78730753/c740f193-bbc1-4c52-b9a3-2310f382f272)

## Installation
Install Amazon efs-utils package

```bash
  sudo yum -y install amazon-efs-utils
```